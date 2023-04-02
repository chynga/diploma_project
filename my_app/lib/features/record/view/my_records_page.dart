import 'package:dental_plaza/core/extension/src/build_context.dart';
import 'package:dental_plaza/core/resources/assets.gen.dart';
import 'package:dental_plaza/core/resources/resources.dart';
import 'package:dental_plaza/features/app/widgets/build_segment_widget.dart';
import 'package:dental_plaza/features/app/widgets/custom/custom_app_bar.dart';
import 'package:dental_plaza/features/app/widgets/custom/custom_buttons/custom_text_back_button.dart';
import 'package:dental_plaza/features/app/widgets/custom/custom_switch_button.dart';
import 'package:dental_plaza/features/app/widgets/gradient_bg.dart';
import 'package:dental_plaza/features/record/widgets/record_item_widget.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';

class MyRecordsPage extends StatefulWidget {
  const MyRecordsPage({super.key});

  @override
  State<MyRecordsPage> createState() => _MyRecordsPageState();
}

class _MyRecordsPageState extends State<MyRecordsPage> {
  int segmentValue = 0;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: const PreferredSize(
        preferredSize: Size.fromHeight(88),
        child: CustomAppBar(),
      ),
      body: GradientBg(
        child: Column(
          children: [
            const SizedBox(
              height: 10,
            ),
            Padding(
              padding: const EdgeInsets.all(16),
              child: Row(
                children: const [
                  CustomTextBackButton(),
                ],
              ),
            ),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 16)
                  .copyWith(bottom: 12),
              child: Row(
                children: [
                  Expanded(
                    child: CustomSwitchButton<int>(
                      border: Border.all(color: AppColors.kBlue),
                      groupValue: segmentValue,
                      thumbColor: AppColors.kBlue,
                      backgroundColor: AppColors.kWhite,
                      customSwitchButtonBorderRadius: 50,
                      padding: EdgeInsets.zero,
                      children: {
                        0: BuildSegmentWidget(
                          text: context.localized.myRecords,
                          isSelected: 0 == segmentValue,
                        ),
                        1: BuildSegmentWidget(
                          text: context.localized.pastRecords,
                          isSelected: 1 == segmentValue,
                        ),
                      },
                      onValueChanged: (int? value) {
                        setState(() {
                          segmentValue = value!;
                        });
                      },
                    ),
                  ),
                ],
              ),
            ),
            Expanded(
              child: ListView.builder(
                padding: const EdgeInsets.symmetric(
                  horizontal: 24,
                ),
                itemBuilder: (context, index) {
                  return const Padding(
                    padding: EdgeInsets.symmetric(vertical: 12),
                    child: RecordItemWidget(),
                  );
                },
                itemCount: 2,
              ),
            )
          ],
        ),
      ),
    );
  }
}
