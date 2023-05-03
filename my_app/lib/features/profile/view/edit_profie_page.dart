import 'package:auto_route/auto_route.dart';
import 'package:dental_plaza/core/extension/src/build_context.dart';
import 'package:dental_plaza/core/resources/resources.dart';
import 'package:dental_plaza/features/app/router/app_router.dart';
import 'package:dental_plaza/features/app/widgets/custom/custom_buttons/custom_button.dart';
import 'package:dental_plaza/features/app/widgets/custom/custom_buttons/custom_text_back_button.dart';
import 'package:dental_plaza/features/app/widgets/custom/custom_snackbars.dart';
import 'package:dental_plaza/features/auth/model/user_dto.dart';
import 'package:dental_plaza/features/profile/bloc/edit_profile_cubit.dart';
import 'package:dental_plaza/features/profile/bloc/profile_cubit.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:loader_overlay/loader_overlay.dart';

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

  @override
  void initState() {
    super.initState();
    nameController.text = widget.user.fullName ?? "";
    emailController.text = widget.user.email ?? "";
    phoneController.text = widget.user.phone ?? "";
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
              const CircleAvatar(
                maxRadius: 50,
                backgroundColor: Color(0xff666666),
                child: Icon(
                  Icons.person,
                  color: Colors.white,
                  size: 80,
                ),
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
                      phone: phoneController.text,
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

  Padding editProfileRow(
    BuildContext context,
    String label,
    TextEditingController controller,
  ) {
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
          ),
        ],
      ),
    );
  }
}
