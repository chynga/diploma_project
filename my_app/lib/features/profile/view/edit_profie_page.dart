import 'dart:developer';
import 'dart:io';

import 'package:auto_route/auto_route.dart';
import 'package:dental_plaza/core/extension/src/build_context.dart';
import 'package:dental_plaza/core/resources/assets.gen.dart';
import 'package:dental_plaza/core/resources/resources.dart';
import 'package:dental_plaza/features/app/router/app_router.dart';
import 'package:dental_plaza/features/app/widgets/custom/custom_buttons/custom_button.dart';
import 'package:dental_plaza/features/app/widgets/custom/custom_buttons/custom_text_back_button.dart';
import 'package:dental_plaza/features/app/widgets/custom/custom_snackbars.dart';
import 'package:dental_plaza/features/auth/model/user_dto.dart';
import 'package:dental_plaza/features/profile/bloc/edit_profile_cubit.dart';
import 'package:dental_plaza/features/profile/bloc/profile_cubit.dart';
import 'package:firebase_storage/firebase_storage.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:image_picker/image_picker.dart';
import 'package:loader_overlay/loader_overlay.dart';
import 'package:mask_text_input_formatter/mask_text_input_formatter.dart';

class EditProfilePage extends StatefulWidget with AutoRouteWrapper {
  final UserDTO user;
  const EditProfilePage({super.key, required this.user});

  @override
  State<EditProfilePage> createState() => _EditProfilePageState();

  @override
  Widget wrappedRoute(BuildContext context) {
    return BlocProvider<EditProfileCubit>(
      create: (context) => EditProfileCubit(context.repository.authRepository),
      child: this,
    );
  }
}

class _EditProfilePageState extends State<EditProfilePage> {
  TextEditingController nameController = TextEditingController();
  TextEditingController emailController = TextEditingController();
  TextEditingController phoneController = TextEditingController();
  MaskTextInputFormatter maskPhoneFormatter = MaskTextInputFormatter(
    mask: '+7 (###) ###-##-##',
    filter: {"#": RegExp('[0-9]')},
  );
  XFile? avatar;
  String? profileImageUrl;

  final ImagePicker picker = ImagePicker();
  Future _getImage() async {
    final image = await picker.pickImage(source: ImageSource.gallery);
    setState(() {
      avatar = image;
    });
    profileImageUrl = await toFireStore();
  }

  @override
  void initState() {
    super.initState();
    nameController.text = widget.user.fullName ?? "";
    emailController.text = widget.user.email ?? "";
    phoneController.text =
        maskPhoneFormatter.maskText(widget.user.phone?.substring(2) ?? "");
    maskPhoneFormatter = MaskTextInputFormatter(
      mask: '+7 (###) ###-##-##',
      initialText: widget.user.phone?.substring(2),
      filter: {"#": RegExp('[0-9]')},
    );
  }

  @override
  Widget build(BuildContext context) {
    return LoaderOverlay(
      child: Scaffold(
        body: SafeArea(
          child: ListView(
            padding: const EdgeInsets.symmetric(horizontal: 22),
            children: [
              const SizedBox(
                height: 16,
              ),
              const CustomTextBackButton(),
              const SizedBox(
                height: 59,
              ),
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  InkWell(
                    borderRadius: BorderRadius.circular(50),
                    onTap: () async {
                      await _getImage();
                    },
                    child: Stack(
                      children: [
                        CircleAvatar(
                          maxRadius: 50,
                          backgroundColor: const Color(0xff666666),
                          child: avatar != null
                              ? ClipRRect(
                                  borderRadius: BorderRadius.circular(50),
                                  child: Image.file(
                                    File(avatar!.path),
                                    fit: BoxFit.cover,
                                    width: 100,
                                    height: 100,
                                  ),
                                )
                              : profileImageUrl != null
                                  ? ClipRRect(
                                      borderRadius: BorderRadius.circular(50),
                                      child: Image.network(
                                        profileImageUrl!,
                                        fit: BoxFit.cover,
                                        width: 100,
                                        height: 100,
                                      ),
                                    )
                                  : const Icon(
                                      Icons.person,
                                      color: Colors.white,
                                      size: 80,
                                    ),
                        ),
                        if (avatar == null)
                          Positioned(
                            child: Container(
                              height: 100,
                              width: 100,
                              decoration: BoxDecoration(
                                borderRadius: BorderRadius.circular(50),
                                color: Colors.black.withOpacity(0.47),
                              ),
                              child: Padding(
                                padding: const EdgeInsets.all(30.0),
                                child: SvgPicture.asset(
                                  Assets.icons.edit3.path,
                                ),
                              ),
                            ),
                          )
                      ],
                    ),
                  ),
                ],
              ),
              const SizedBox(
                height: 64,
              ),
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 16),
                child: Column(
                  children: [
                    editProfileRow(
                      context,
                      context.localized.fio,
                      nameController,
                    ),
                    const SizedBox(
                      height: 18,
                    ),
                    editProfileRow(context, 'E-mail', emailController),
                    const SizedBox(
                      height: 18,
                    ),
                    editProfileRow(
                      context,
                      context.localized.phone,
                      phoneController,
                      inputFormatters: [maskPhoneFormatter],
                      keyboardType: TextInputType.phone,
                    ),
                  ],
                ),
              ),
              const SizedBox(
                height: 10,
              ),
              BlocListener<EditProfileCubit, EditProfileState>(
                listener: (context, state) {
                  state.maybeWhen(
                    loadedState: (message) {
                      context.loaderOverlay.hide();
                      buildSuccessCustomSnackBar(context, message);
                      BlocProvider.of<ProfileCubit>(context).getProfie();
                      context.router.popUntil(
                        (route) => route.settings.name == LauncherRoute.name,
                      );
                    },
                    loadingState: () {
                      context.loaderOverlay.show();
                    },
                    errorState: (message) {
                      context.loaderOverlay.hide();
                      buildErrorCustomSnackBar(context, message);
                    },
                    orElse: () {
                      context.loaderOverlay.hide();
                    },
                  );
                },
                child: CustomButton(
                  body: Text(
                    context.localized.save,
                    style:
                        AppTextStyles.m16w400.copyWith(color: AppColors.kWhite),
                  ),
                  onClick: () {
                    BlocProvider.of<EditProfileCubit>(context).editProfile(
                      fullName: nameController.text,
                      email: emailController.text,
                      phone: "+7${maskPhoneFormatter.getUnmaskedText()}",
                      profileImageUrl: profileImageUrl,
                    );
                  },
                  style: mainButtonStyle(radius: 20),
                  height: 35,
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  Future<String?> toFireStore() async {
    try {
      final storageRef = FirebaseStorage.instance.ref();
      final imageRef =
          storageRef.child("profile/${avatar!.name}${widget.user.id}");
      final TaskSnapshot addImg = await imageRef.putFile(File(avatar!.path));
      final String downloadUrl = await addImg.ref.getDownloadURL();
      return downloadUrl;
    } catch (e) {
      buildErrorCustomSnackBar(
        context,
        'Ошибка при загрузке фото в Firebase Storage: $e',
      );
      return null;
    }
  }

  Padding editProfileRow(
    BuildContext context,
    String label,
    TextEditingController controller, {
    List<TextInputFormatter>? inputFormatters,
    TextInputType? keyboardType,
  }) {
    return Padding(
      padding: const EdgeInsets.all(4.0),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            label,
            style: AppTextStyles.m16w400.copyWith(color: AppColors.kBlueBlack),
          ),
          const SizedBox(
            height: 12,
          ),
          CupertinoTextField(
            decoration: const BoxDecoration(
              color: AppColors.kGrey8,
            ),
            placeholder: context.localized.fio,
            controller: controller,
            inputFormatters: inputFormatters,
            keyboardType: keyboardType,
          ),
        ],
      ),
    );
  }
}
