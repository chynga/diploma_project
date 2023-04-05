import 'package:auto_route/auto_route.dart';
import 'package:dental_plaza/core/extension/src/build_context.dart';
import 'package:dental_plaza/core/resources/resources.dart';
import 'package:dental_plaza/features/app/widgets/custom/custom_buttons/custom_button.dart';
import 'package:dental_plaza/features/app/widgets/custom/custom_buttons/custom_text_back_button.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class EditProfilePage extends StatefulWidget {
  const EditProfilePage({super.key});

  @override
  State<EditProfilePage> createState() => _EditProfilePageState();
}

class _EditProfilePageState extends State<EditProfilePage> {
  TextEditingController nameController = TextEditingController();
  TextEditingController emailController = TextEditingController();
  TextEditingController phoneController = TextEditingController();
  @override
  Widget build(BuildContext context) {
    return Scaffold(
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
                      context, context.localized.fio, nameController),
                  const SizedBox(
                    height: 18,
                  ),
                  editProfileRow(context, 'E-mail', emailController),
                  const SizedBox(
                    height: 18,
                  ),
                  editProfileRow(
                      context, context.localized.fio, phoneController),
                ],
              ),
            ),
            const SizedBox(
              height: 10,
            ),
            CustomButton(
              body: Text(
                context.localized.save,
                style: AppTextStyles.m16w400.copyWith(color: AppColors.kWhite),
              ),
              onClick: () {
                context.router.pop();
              },
              style: mainButtonStyle(radius: 20),
              height: 35,
            ),
          ],
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
