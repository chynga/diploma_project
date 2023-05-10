import 'package:dental_plaza/core/common/constants.dart';
import 'package:dental_plaza/core/extension/src/build_context.dart';
import 'package:dental_plaza/core/resources/resources.dart';
import 'package:dental_plaza/features/app/widgets/bottom_sheet.dart';
import 'package:dental_plaza/features/main/model/doctor_dto.dart';
import 'package:dental_plaza/features/record/bloc/free_slots_cubit.dart';
import 'package:dental_plaza/features/record/bloc/make_record_cubit.dart';
import 'package:dental_plaza/features/record/widgets/new_record_bottom_sheet.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

class DoctorCardWidget extends StatelessWidget {
  final DoctorDTO doctor;
  const DoctorCardWidget({
    super.key,
    required this.doctor,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 188,
      width: 124,
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(25),
        color: AppColors.kWhite,
      ),
      child: Material(
        borderRadius: BorderRadius.circular(25),
        color: Colors.transparent,
        child: InkWell(
          borderRadius: BorderRadius.circular(25),
          onTap: () {
            bottomSheet(
              MultiBlocProvider(
                providers: [
                  BlocProvider<MakeRecordCubit>(
                    create: (context) =>
                        MakeRecordCubit(context.repository.recordRepository),
                  ),
                  BlocProvider<FreeSlotsCubit>(
                    create: (context) =>
                        FreeSlotsCubit(context.repository.recordRepository),
                  ),
                ],
                child: NewRecordBottomSheet(
                  doctor: doctor,
                  parentContext: context,
                ),
              ),
              context,
            );
          },
          child: Column(
            children: [
              const SizedBox(
                height: 12,
              ),
              Stack(
                children: [
                  Positioned(
                    bottom: 0,
                    child: Container(
                      height: 108,
                      width: 108,
                      decoration: BoxDecoration(
                        color: AppColors.kBlue,
                        borderRadius: BorderRadius.circular(100),
                        boxShadow: [
                          BoxShadow(
                            offset: const Offset(0, 4),
                            color: Colors.black.withOpacity(0.25),
                            blurRadius: 4,
                          )
                        ],
                      ),
                    ),
                  ),
                  ClipRRect(
                    borderRadius: const BorderRadius.only(
                      bottomLeft: Radius.circular(100),
                      bottomRight: Radius.circular(100),
                    ),
                    child: Image.network(
                      doctor.imageUrl ?? NOT_FOUND_IMAGE,
                      height: 124,
                      width: 108,
                    ),
                  ),
                ],
              ),
              const SizedBox(
                height: 12,
              ),
              Text(
                '${doctor.fullName}',
                style: AppTextStyles.m11w400,
                textAlign: TextAlign.center,
              )
            ],
          ),
        ),
      ),
    );
  }
}
