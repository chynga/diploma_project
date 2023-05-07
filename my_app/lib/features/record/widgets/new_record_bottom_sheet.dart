import 'package:auto_route/auto_route.dart';
import 'package:dental_plaza/core/extension/extensions.dart';
import 'package:dental_plaza/core/resources/resources.dart';
import 'package:dental_plaza/features/app/widgets/custom/custom_buttons/custom_button.dart';
import 'package:dental_plaza/features/app/widgets/custom/custom_snackbars.dart';
import 'package:dental_plaza/features/app/widgets/shimmer_box.dart';
import 'package:dental_plaza/features/main/model/doctor_dto.dart';
import 'package:dental_plaza/features/main/model/service_dto.dart';
import 'package:dental_plaza/features/main/widgets/service_card_widget.dart';
import 'package:dental_plaza/features/record/bloc/free_slots_cubit.dart';
import 'package:dental_plaza/features/record/bloc/make_record_cubit.dart';
import 'package:dental_plaza/features/record/bloc/records_cubit.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:intl/intl.dart';
import 'package:table_calendar/table_calendar.dart';

class NewRecordBottomSheet extends StatefulWidget {
  final DoctorDTO doctor;
  const NewRecordBottomSheet({super.key, required this.doctor});

  @override
  State<NewRecordBottomSheet> createState() => _NewRecordBottomSheetState();
}

class _NewRecordBottomSheetState extends State<NewRecordBottomSheet> {
  DateTime _selectedDay = DateTime.now();
  int? selectedHour;
  String selectedServiceId = '';
  @override
  void initState() {
    if (widget.doctor.id != null &&
        widget.doctor.services != null &&
        widget.doctor.services!.isNotEmpty &&
        widget.doctor.services!.first.id != null) {
      selectedServiceId = widget.doctor.services!.first.id!;
      BlocProvider.of<FreeSlotsCubit>(context).getFreeSlots(
        doctorId: widget.doctor.id!,
        serviceId: widget.doctor.services!.first.id!,
        date: DateTime.now().millisecondsSinceEpoch,
      );
    }
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return DraggableScrollableSheet(
      maxChildSize: 0.85,
      initialChildSize: 0.7,
      expand: false,
      builder: (context, scrollController) {
        return Column(
          children: [
            Padding(
              padding: const EdgeInsets.all(18.0),
              child: Container(
                height: 5,
                width: 60,
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(5),
                  color: AppColors.kGrey2,
                ),
              ),
            ),
            Expanded(
              child: ListView(
                controller: scrollController,
                children: [
                  Column(
                    children: [
                      Text(
                        context.localized.doctor,
                        style: AppTextStyles.m16w500,
                      ),
                      const SizedBox(
                        height: 19,
                      ),
                      Text(
                        '${widget.doctor.fullName}',
                        style: AppTextStyles.m16w400,
                      ),
                      const SizedBox(
                        height: 47,
                      ),
                      Text(
                        context.localized.services,
                        style: AppTextStyles.m16w500,
                      ),
                      SizedBox(
                        height: 161,
                        child: ListView.builder(
                          padding: const EdgeInsets.symmetric(horizontal: 28),
                          scrollDirection: Axis.horizontal,
                          itemCount: widget.doctor.services?.length,
                          itemBuilder: (context, index) {
                            return Padding(
                              padding: const EdgeInsets.only(
                                right: 16,
                                top: 22,
                                bottom: 24,
                              ),
                              child: ServiceCardWidget(
                                onTap: () {
                                  selectedServiceId =
                                      widget.doctor.services?[index].id ?? "";
                                  BlocProvider.of<FreeSlotsCubit>(context)
                                      .getFreeSlots(
                                    date: _selectedDay.millisecondsSinceEpoch,
                                    doctorId: widget.doctor.id ?? "",
                                    serviceId: selectedServiceId,
                                  );
                                  selectedHour = null;
                                  setState(() {});
                                },
                                bgColor: selectedServiceId ==
                                        widget.doctor.services?[index].id
                                    ? AppColors.kBlue
                                    : null,
                                textColor: selectedServiceId ==
                                        widget.doctor.services?[index].id
                                    ? AppColors.kWhite
                                    : null,
                                service: widget.doctor.services?[index] ??
                                    const ServiceDTO(),
                                boxShadow: [
                                  BoxShadow(
                                    blurRadius: 5,
                                    color: AppColors.kBlack.withOpacity(0.25),
                                  )
                                ],
                              ),
                            );
                          },
                        ),
                      ),
                      const SizedBox(
                        height: 10,
                      ),
                      Padding(
                        padding: const EdgeInsets.symmetric(horizontal: 18),
                        child: TableCalendar(
                          startingDayOfWeek: StartingDayOfWeek.monday,
                          locale: context.currentLocale.localeCode,
                          firstDay: DateTime.now(),
                          focusedDay: _selectedDay,
                          currentDay: _selectedDay,
                          lastDay: DateTime(2024),
                          onDaySelected: (selectedDay, focusedDay) {
                            _selectedDay = selectedDay;
                            BlocProvider.of<FreeSlotsCubit>(context)
                                .getFreeSlots(
                              date: _selectedDay.millisecondsSinceEpoch,
                              doctorId: widget.doctor.id ?? "",
                              serviceId: selectedServiceId,
                            );
                            selectedHour = null;
                            setState(() {});
                          },
                          calendarFormat: CalendarFormat.week,
                          headerStyle: HeaderStyle(
                            leftChevronVisible: false,
                            rightChevronVisible: false,
                            titleCentered: true,
                            formatButtonVisible: false,
                            titleTextStyle: AppTextStyles.m16w500,
                            titleTextFormatter: (date, locale) =>
                                DateFormat.yMMMM(locale)
                                    .format(date)
                                    .capitalize(),
                          ),
                          daysOfWeekHeight: 27,
                          daysOfWeekStyle: DaysOfWeekStyle(
                            decoration: BoxDecoration(
                              color: AppColors.kBlue.withOpacity(0.25),
                            ),
                            weekdayStyle: AppTextStyles.m16w500,
                            weekendStyle: AppTextStyles.m16w500,
                            dowTextFormatter: (date, locale) =>
                                DateFormat('E', locale.toString())
                                    .format(date)
                                    .toUpperCase(),
                          ),
                          calendarStyle: CalendarStyle(
                            weekendTextStyle: AppTextStyles.m16w500,
                            outsideDaysVisible: false,
                            defaultTextStyle: AppTextStyles.m16w500,
                            disabledTextStyle: AppTextStyles.m16w500.copyWith(
                              color: AppColors.kBlack.withOpacity(0.47),
                            ),
                            todayDecoration: const BoxDecoration(
                              color: AppColors.kBlue,
                              shape: BoxShape.circle,
                            ),
                            rowDecoration:
                                const BoxDecoration(color: Color(0xffEBEBE9)),
                          ),
                        ),
                      ),
                      Padding(
                        padding: const EdgeInsets.symmetric(
                          horizontal: 21,
                          vertical: 33,
                        ),
                        child: BlocConsumer<FreeSlotsCubit, FreeSlotsState>(
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
                              loadedState: (freeSlots) {
                                return Wrap(
                                  alignment: WrapAlignment.center,
                                  spacing: 12,
                                  runSpacing: 12,
                                  children: freeSlots
                                      .map(
                                        (e) => Container(
                                          decoration: BoxDecoration(
                                            borderRadius:
                                                BorderRadius.circular(50),
                                            color: selectedHour == e
                                                ? AppColors.kBlue
                                                : AppColors.kWhite,
                                            boxShadow: [
                                              BoxShadow(
                                                blurRadius: 5,
                                                color: AppColors.kBlack
                                                    .withOpacity(0.25),
                                              )
                                            ],
                                          ),
                                          child: Material(
                                            color: Colors.transparent,
                                            borderRadius:
                                                BorderRadius.circular(50),
                                            child: InkWell(
                                              onTap: () {
                                                selectedHour = e;
                                                setState(() {});
                                              },
                                              borderRadius:
                                                  BorderRadius.circular(50),
                                              child: Padding(
                                                padding:
                                                    const EdgeInsets.symmetric(
                                                  vertical: 8,
                                                  horizontal: 12,
                                                ),
                                                child: Text(
                                                  DateFormat.Hm().format(
                                                    DateTime
                                                        .fromMillisecondsSinceEpoch(
                                                      e,
                                                    ),
                                                  ),
                                                  style: AppTextStyles.m14w500
                                                      .copyWith(
                                                    color: selectedHour == e
                                                        ? AppColors.kWhite
                                                        : AppColors.kBlack,
                                                    height: 1,
                                                  ),
                                                ),
                                              ),
                                            ),
                                          ),
                                        ),
                                      )
                                      .toList(),
                                );
                              },
                              orElse: () {
                                return Wrap(
                                  alignment: WrapAlignment.center,
                                  spacing: 12,
                                  runSpacing: 12,
                                  children: List.generate(
                                    24,
                                    (index) => const LoadShimmer(
                                      height: 32,
                                      width: 60,
                                      radius: 50,
                                    ),
                                  ),
                                );
                              },
                            );
                          },
                        ),
                      ),
                      Padding(
                        padding: const EdgeInsets.symmetric(horizontal: 23)
                            .copyWith(bottom: 25),
                        child: BlocConsumer<MakeRecordCubit, MakeRecordState>(
                          listener: (context, state) {
                            state.maybeWhen(
                              errorState: (message) {
                                buildErrorCustomSnackBar(context, message);
                              },
                              loadedState: (message) {
                                buildSuccessCustomSnackBar(context, message);
                                BlocProvider.of<RecordsCubit>(context).getRecords();
                                context.router.pop();
                              },
                              orElse: () {},
                            );
                          },
                          builder: (context, state) {
                            return state.maybeWhen(
                              loadingState: () {
                                return CustomButton(
                                  body: const CupertinoActivityIndicator(),
                                  onClick: () {},
                                  style: mainButtonStyle(radius: 20),
                                  height: 35,
                                );
                              },
                              orElse: () {
                                return CustomButton(
                                  body: Text(
                                    context.localized.makeRecord,
                                    style: AppTextStyles.m16w400
                                        .copyWith(color: AppColors.kWhite),
                                  ),
                                  onClick: () {
                                    if (selectedHour == null) {
                                      buildErrorCustomSnackBar(
                                        context,
                                        context.localized.selectRecordTime,
                                      );
                                      return;
                                    }
                                    BlocProvider.of<MakeRecordCubit>(context)
                                        .makeRecord(
                                      doctorId: widget.doctor.id ?? "",
                                      serviceId: selectedServiceId,
                                      timeStamp: selectedHour!,
                                    );
                                  },
                                  style: mainButtonStyle(radius: 20),
                                  height: 35,
                                );
                              },
                            );
                          },
                        ),
                      )
                    ],
                  ),
                ],
              ),
            ),
          ],
        );
      },
    );
  }
}

extension StringExtension on String {
  String capitalize() {
    return "${this[0].toUpperCase()}${substring(1).toLowerCase()}";
  }
}
