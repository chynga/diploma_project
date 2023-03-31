import 'package:dental_plaza/core/resources/assets.gen.dart';
import 'package:dental_plaza/core/resources/resources.dart';
import 'package:dental_plaza/features/app/widgets/custom/custom_app_bar.dart';
import 'package:dental_plaza/features/app/widgets/custom/custom_buttons/custom_square_button.dart';
import 'package:dental_plaza/features/app/widgets/custom/custom_text_field.dart';
import 'package:flutter/material.dart';

class ChatPage extends StatefulWidget {
  const ChatPage({super.key});

  @override
  State<ChatPage> createState() => _ChatPageState();
}

class _ChatPageState extends State<ChatPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.kGreyBg,
      appBar: const PreferredSize(
        preferredSize: Size.fromHeight(88),
        child: CustomAppBar(),
      ),
      body: Column(
        children: [
          Center(
            child: Container(
              decoration: const BoxDecoration(
                borderRadius: BorderRadius.only(
                  bottomLeft: Radius.circular(16),
                  bottomRight: Radius.circular(16),
                ),
                color: AppColors.kBlue,
              ),
              child: Padding(
                padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 7)
                    .copyWith(top: 3),
                child: Text(
                  'Администратор',
                  style:
                      AppTextStyles.m18w400.copyWith(color: AppColors.kWhite),
                ),
              ),
            ),
          ),
          Expanded(
              child: ListView(
            children: [
              ///FIXME MESSAGE LIST
            ],
          )),
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 14),
            child: SizedBox(
              child: Row(
                children: [
                  Expanded(
                    child: SizedBox(
                      height: 42,
                      child: CustomTextField(
                        borderSideColor: AppColors.kBlack.withOpacity(0.1),
                        borderRadius: 10,
                        maxLines: 1,
                      ),
                    ),
                  ),
                  const SizedBox(
                    width: 13,
                  ),
                  Container(
                    height: 33.3,
                    width: 33.3,
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(50),
                      color: AppColors.kBlue,
                    ),
                    child: Material(
                      borderRadius: BorderRadius.circular(50),
                      color: Colors.transparent,
                      child: InkWell(
                        borderRadius: BorderRadius.circular(50),
                        onTap: () {},
                        child: const Icon(
                          Icons.arrow_forward_rounded,
                          color: AppColors.kWhite,
                        ),
                      ),
                    ),
                  ),
                ],
              ),
            ),
          )
        ],
      ),
    );
  }
}
