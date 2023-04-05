import 'package:auto_route/auto_route.dart';
import 'package:dental_plaza/core/extension/extensions.dart';
import 'package:dental_plaza/core/resources/resources.dart';
import 'package:dental_plaza/features/app/widgets/custom/custom_buttons/custom_button.dart';
import 'package:dental_plaza/features/main/model/mock_doctor.dart';
import 'package:dental_plaza/features/main/widgets/service_card_widget.dart';
import 'package:flutter/material.dart';
import 'package:intl/intl.dart';
import 'package:table_calendar/table_calendar.dart';

class NewRecordBottomSheet extends StatefulWidget {
  const NewRecordBottomSheet({super.key});

  @override
  State<NewRecordBottomSheet> createState() => _NewRecordBottomSheetState();
}

class _NewRecordBottomSheetState extends State<NewRecordBottomSheet> {
  DateTime _selectedDay = DateTime.now();
  String selectedHour = '';
  int selectedService = 0;
  List<String> hours = [
    '09:00',
    '09:30',
    '10:00',
    '10:30',
    '11:00',
    '11:30',
    '12:00',
    '12:30',
    '13:00',
    '13:30',
    '14:00',
    '14:30',
    '15:00',
    '15:30',
    '16:00',
    '16:30',
    '17:00',
    '17:30',
    '18:00',
    '18:30',
    '19:00',
    '19:30',
    '20:00',
    '20:30'
  ];
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
                      const Text(
                        'Гулмарал Шынкызбековна',
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
                          itemCount: services.length,
                          itemBuilder: (context, index) {
                            return Padding(
                              padding: const EdgeInsets.only(
                                right: 16,
                                top: 22,
                                bottom: 24,
                              ),
                              child: ServiceCardWidget(
                                onTap: () {
                                  selectedService = index;
                                  setState(() {});
                                },
                                bgColor: selectedService == index
                                    ? AppColors.kBlue
                                    : null,
                                textColor: selectedService == index
                                    ? AppColors.kWhite
                                    : null,
                                service: services[index],
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
                          firstDay: DateTime(2023),
                          focusedDay: _selectedDay,
                          currentDay: _selectedDay,
                          lastDay: DateTime(2024),
                          onDaySelected: (selectedDay, focusedDay) {
                            _selectedDay = selectedDay;
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
                        child: Wrap(
                          alignment: WrapAlignment.center,
                          spacing: 12,
                          runSpacing: 12,
                          children: hours
                              .map(
                                (e) => Container(
                                  decoration: BoxDecoration(
                                    borderRadius: BorderRadius.circular(50),
                                    color: selectedHour == e
                                        ? AppColors.kBlue
                                        : AppColors.kWhite,
                                    boxShadow: [
                                      BoxShadow(
                                        blurRadius: 5,
                                        color:
                                            AppColors.kBlack.withOpacity(0.25),
                                      )
                                    ],
                                  ),
                                  child: Material(
                                    color: Colors.transparent,
                                    borderRadius: BorderRadius.circular(50),
                                    child: InkWell(
                                      onTap: () {
                                        selectedHour = e;
                                        setState(() {});
                                      },
                                      borderRadius: BorderRadius.circular(50),
                                      child: Padding(
                                        padding: const EdgeInsets.symmetric(
                                          vertical: 8,
                                          horizontal: 12,
                                        ),
                                        child: Text(
                                          e,
                                          style: AppTextStyles.m14w500.copyWith(
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
                        ),
                      ),
                      Padding(
                        padding: const EdgeInsets.symmetric(horizontal: 23)
                            .copyWith(bottom: 25),
                        child: CustomButton(
                          body: Text(
                            context.localized.makeRecord,
                            style: AppTextStyles.m16w400
                                .copyWith(color: AppColors.kWhite),
                          ),
                          onClick: () {
                            context.router.pop();
                          },
                          style: mainButtonStyle(radius: 20),
                          height: 35,
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
