import 'package:auto_route/auto_route.dart';
import 'package:dental_plaza/core/resources/resources.dart';
import 'package:dental_plaza/features/app/widgets/custom/custom_buttons/custom_back_button.dart';
import 'package:dental_plaza/features/app/widgets/shimmer_box.dart';
import 'package:dental_plaza/features/main/bloc/notifications_cubit.dart';
import 'package:dental_plaza/features/main/bloc/view_notifications_cubit.dart';
import 'package:dental_plaza/settings/widget/scope/settings_scope.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:intl/intl.dart';

class NotificationsPage extends StatefulWidget {
  const NotificationsPage({super.key});

  @override
  State<NotificationsPage> createState() => _NotificationsPageState();
}

class _NotificationsPageState extends State<NotificationsPage> {
  @override
  void initState() {
    BlocProvider.of<ViewNotificationsCubit>(context).viewNots();
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return WillPopScope(
      onWillPop: () async {
        SettingsScope.setisNotificationViewed(context, true);
        setState(() {});
        return true;
      },
      child: Scaffold(
        body: SafeArea(
          child: Column(
            children: [
              Padding(
                padding: const EdgeInsets.all(8.0),
                child: CustomBackButton(
                  onTap: () {
                    SettingsScope.setisNotificationViewed(context, true);
                    setState(() {});
                    context.router.pop();
                  },
                ),
              ),
              Expanded(
                child: BlocBuilder<NotificationsCubit, NotificationsState>(
                  builder: (context, state) {
                    return state.maybeWhen(
                      loadedState: (notifications, isViewed) {
                        return ListView.builder(
                          padding: const EdgeInsets.symmetric(horizontal: 16),
                          itemCount: notifications.length,
                          itemBuilder: (context, index) {
                            return Padding(
                              padding: const EdgeInsets.symmetric(vertical: 8),
                              child: Container(
                                decoration: BoxDecoration(
                                  borderRadius: BorderRadius.circular(10),
                                  color: AppColors.kWhite,
                                  boxShadow: [
                                    BoxShadow(
                                      offset: const Offset(0, 4),
                                      color: AppColors.kBlack.withOpacity(0.25),
                                      blurRadius: 4,
                                    )
                                  ],
                                ),
                                child: Padding(
                                  padding: const EdgeInsets.symmetric(
                                    horizontal: 12,
                                    vertical: 6,
                                  ),
                                  child: Column(
                                    crossAxisAlignment:
                                        CrossAxisAlignment.start,
                                    children: [
                                      Text(
                                        notifications[index].message ?? "",
                                        style: AppTextStyles.m20w500,
                                      ),
                                      const SizedBox(
                                        height: 4,
                                      ),
                                      Text(
                                        DateFormat('dd.m.yyyy').format(
                                            notifications[index].showAt ??
                                                DateTime.now()),
                                        style: AppTextStyles.m16w400.copyWith(
                                            fontWeight: FontWeight.w300),
                                      ),
                                      // const SizedBox(
                                      //   height: 4,
                                      // ),
                                      // const Text(
                                      //   'Удаление зуба',
                                      //   style: AppTextStyles.m16w400,
                                      // ),
                                    ],
                                  ),
                                ),
                              ),
                            );
                          },
                        );
                      },
                      orElse: () {
                        return ListView.builder(
                          padding: const EdgeInsets.symmetric(horizontal: 16),
                          itemCount: 10,
                          itemBuilder: (context, index) {
                            return const LoadShimmer(
                              height: 56,
                              radius: 10,
                            );
                          },
                        );
                      },
                    );
                  },
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
