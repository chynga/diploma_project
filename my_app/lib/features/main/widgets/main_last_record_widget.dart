import 'package:dental_plaza/core/extension/src/build_context.dart';
import 'package:dental_plaza/core/resources/assets.gen.dart';
import 'package:dental_plaza/core/resources/resources.dart';
import 'package:dental_plaza/features/app/widgets/shimmer_box.dart';
import 'package:dental_plaza/features/record/bloc/records_cubit.dart';
import 'package:dental_plaza/features/record/model/record_dto.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:intl/intl.dart';

class MainLastRecordWidget extends StatelessWidget {
  const MainLastRecordWidget({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return BlocBuilder<RecordsCubit, RecordsState>(
      builder: (context, state) {
        return Container(
          decoration: BoxDecoration(
            color: AppColors.kBlue,
            borderRadius: BorderRadius.circular(20),
            boxShadow: [
              BoxShadow(
                color: AppColors.kBlack.withOpacity(0.1),
                offset: const Offset(0, 2),
                blurRadius: 8,
              )
            ],
          ),
          child: Stack(
            children: [
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 16),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    const SizedBox(
                      height: 26,
                    ),
                    state.maybeWhen(
                      loadedState: (myRecords, pastRecords) {
                        return Text(
                          myRecords.isEmpty
                              ? context.localized.noRecordsInATime
                              : DateFormat.MMMMd(
                                  context.currentLocale.localeCode,
                                ).format(
                                  DateTime.parse(
                                    getLastRecord(myRecords)?.time ?? "",
                                  ),
                                ),
                          style: AppTextStyles.m24w500
                              .copyWith(color: AppColors.kWhite),
                        );
                      },
                      orElse: () {
                        return const LoadShimmer(
                          height: 20,
                        );
                      },
                    ),
                    const SizedBox(
                      height: 12,
                    ),
                    state.maybeWhen(
                      loadedState: (myRecords, pastRecords) {
                        return Text(
                          myRecords.isEmpty
                              ? ''
                              : DateFormat.Hm(context.currentLocale.localeCode)
                                  .format(
                                  DateTime.parse(
                                    getLastRecord(myRecords)?.time ?? "",
                                  ),
                                ),
                          style: AppTextStyles.m16w500
                              .copyWith(color: AppColors.kWhite),
                        );
                      },
                      orElse: () {
                        return const LoadShimmer(
                          height: 20,
                        );
                      },
                    ),
                    const SizedBox(
                      height: 12,
                    ),
                    state.maybeWhen(
                      loadedState: (myRecords, pastRecords) {
                        return Text(
                          myRecords.isEmpty
                              ? ""
                              : '${context.localized.doctor}: ${getLastRecord(myRecords)?.doctor?.fullName}',
                          style: AppTextStyles.m16w500
                              .copyWith(color: AppColors.kWhite),
                        );
                      },
                      orElse: () {
                        return const LoadShimmer(
                          height: 20,
                        );
                      },
                    ),
                    const SizedBox(
                      height: 12,
                    ),
                    state.maybeWhen(
                      loadedState: (myRecords, pastRecords) {
                        return Text(
                          myRecords.isEmpty
                              ? ""
                              : context.localized.yourEntryHasBeenVerified,
                          style: AppTextStyles.m16w500
                              .copyWith(color: AppColors.kWhite),
                        );
                      },
                      orElse: () {
                        return const LoadShimmer(
                          height: 20,
                        );
                      },
                    ),
                    const SizedBox(
                      height: 14,
                    )
                  ],
                ),
              ),
              Positioned(
                right: 0,
                bottom: 0,
                //FIXME bug with svg image
                child: SvgPicture.asset(
                  Assets.icons.teethDentalIconBig.path,
                ),
              ),
              Positioned(
                top: 12,
                right: 80,
                child: SvgPicture.asset(
                  Assets.icons.teethDentalIcon.path,
                ),
              )
            ],
          ),
        );
      },
    );
  }

  RecordDTO? getLastRecord(List<RecordDTO> records) {
    final DateTime now = DateTime.now();
    if (records.isEmpty) {
      return null;
    }
    return records.reduce(
      (value, element) =>
          DateTime.parse(value.time ?? now.toString()).difference(now).abs() <
                  DateTime.parse(element.time ?? now.toString())
                      .difference(now)
                      .abs()
              ? value
              : element,
    );
  }
}
