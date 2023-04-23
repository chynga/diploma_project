import 'package:dental_plaza/core/extension/src/build_context.dart';
import 'package:dental_plaza/core/resources/resources.dart';
import 'package:dental_plaza/features/app/widgets/bottom_sheet.dart';
import 'package:dental_plaza/features/main/model/doctor_dto.dart';
import 'package:dental_plaza/features/record/bloc/free_slots_cubit.dart';
import 'package:dental_plaza/features/record/bloc/make_record_cubit.dart';
import 'package:dental_plaza/features/record/widgets/new_record_bottom_sheet.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

class DoctorNameWidget extends StatelessWidget {
  final DoctorDTO doctor;
  const DoctorNameWidget({
    super.key,
    required this.doctor,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(10),
        color: AppColors.kWhite,
        boxShadow: [
          BoxShadow(
            offset: const Offset(0, 2),
            color: AppColors.kBlack.withOpacity(0.3),
            blurRadius: 8,
          )
        ],
      ),
      child: Material(
        borderRadius: BorderRadius.circular(10),
        child: InkWell(
          borderRadius: BorderRadius.circular(10),
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
                ),
              ),
              context,
            );
          },
          child: Padding(
            padding: const EdgeInsets.symmetric(vertical: 12),
            child: Center(
              child: Text(
                doctor.fullName ?? "",
                style: AppTextStyles.m12w400,
              ),
            ),
          ),
        ),
      ),
    );
  }
}
