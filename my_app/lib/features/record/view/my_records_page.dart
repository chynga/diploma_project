import 'package:auto_route/auto_route.dart';
import 'package:dental_plaza/core/extension/src/build_context.dart';
import 'package:dental_plaza/core/resources/resources.dart';
import 'package:dental_plaza/features/app/widgets/build_segment_widget.dart';
import 'package:dental_plaza/features/app/widgets/custom/custom_app_bar.dart';
import 'package:dental_plaza/features/app/widgets/custom/custom_buttons/custom_text_back_button.dart';
import 'package:dental_plaza/features/app/widgets/custom/custom_snackbars.dart';
import 'package:dental_plaza/features/app/widgets/custom/custom_switch_button.dart';
import 'package:dental_plaza/features/app/widgets/gradient_bg.dart';
import 'package:dental_plaza/features/app/widgets/shimmer_box.dart';
import 'package:dental_plaza/features/record/bloc/records_cubit.dart';
import 'package:dental_plaza/features/record/widgets/record_item_widget.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

class MyRecordsPage extends StatefulWidget with AutoRouteWrapper {
  const MyRecordsPage({super.key});

  @override
  State<MyRecordsPage> createState() => _MyRecordsPageState();

  @override
  Widget wrappedRoute(BuildContext context) {
    return BlocProvider<RecordsCubit>(
      create: (context) =>
          RecordsCubit(context.repository.recordRepository)..getRecords(),
      child: this,
    );
  }
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
              child: BlocConsumer<RecordsCubit, RecordsState>(
                listener: (context, state) {
                  state.maybeWhen(
                    errorState: (message) {
                      buildErrorCustomSnackBar(context, message);
                    },
                    orElse: () {},
                  );
                },
                builder: (context, state) {
                  return state.maybeWhen(
                    loadedState: (myRecords, pastRecords) {
                      return IndexedStack(
                        index: segmentValue,
                        children: [
                          ListView.builder(
                            padding: const EdgeInsets.symmetric(
                              horizontal: 24,
                            ),
                            itemBuilder: (context, index) {
                              return Padding(
                                padding:
                                    const EdgeInsets.symmetric(vertical: 12),
                                child: RecordItemWidget(
                                  record: myRecords[index],
                                ),
                              );
                            },
                            itemCount: myRecords.length,
                          ),
                          ListView.builder(
                            padding: const EdgeInsets.symmetric(
                              horizontal: 24,
                            ),
                            itemBuilder: (context, index) {
                              return Padding(
                                padding:
                                    const EdgeInsets.symmetric(vertical: 12),
                                child: RecordItemWidget(
                                  record: pastRecords[index],
                                ),
                              );
                            },
                            itemCount: pastRecords.length,
                          ),
                        ],
                      );
                    },
                    orElse: () {
                      return ListView.builder(
                        padding: const EdgeInsets.symmetric(
                          horizontal: 24,
                        ),
                        itemBuilder: (context, index) {
                          return const Padding(
                            padding: EdgeInsets.symmetric(vertical: 12),
                            child: LoadShimmer(
                              height: 105,
                              radius: 25,
                            ),
                          );
                        },
                        itemCount: 3,
                      );
                    },
                  );
                },
              ),
            )
          ],
        ),
      ),
    );
  }
}
