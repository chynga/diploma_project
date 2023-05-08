import 'package:auto_route/auto_route.dart';
import 'package:dental_plaza/core/extension/src/build_context.dart';
import 'package:dental_plaza/core/resources/assets.gen.dart';
import 'package:dental_plaza/core/resources/resources.dart';
import 'package:dental_plaza/features/app/router/app_router.dart';
import 'package:dental_plaza/features/app/widgets/custom/custom_buttons/custom_square_button.dart';
import 'package:dental_plaza/features/app/widgets/custom/custom_snackbars.dart';
import 'package:dental_plaza/features/app/widgets/shimmer_box.dart';
import 'package:dental_plaza/features/main/bloc/doctors_cubit.dart';
import 'package:dental_plaza/features/main/bloc/notifications_cubit.dart';
import 'package:dental_plaza/features/main/bloc/services_cubit.dart';
import 'package:dental_plaza/features/main/bloc/view_notifications_cubit.dart';
import 'package:dental_plaza/features/main/model/mock_doctor.dart';
import 'package:dental_plaza/features/main/widgets/doctor_card_widget.dart';
import 'package:dental_plaza/features/main/widgets/main_last_record_widget.dart';
import 'package:dental_plaza/features/main/widgets/nearest_my_record_widget.dart';
import 'package:dental_plaza/features/main/widgets/service_card_widget.dart';
import 'package:dental_plaza/features/main/widgets/show_case_eight.dart';
import 'package:dental_plaza/features/main/widgets/show_case_nine.dart';
import 'package:dental_plaza/features/main/widgets/show_case_seven.dart';
import 'package:dental_plaza/features/main/widgets/show_case_six.dart';
import 'package:dental_plaza/features/main/widgets/show_case_ten.dart';
import 'package:dental_plaza/settings/widget/scope/settings_scope.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

class MainPage extends StatefulWidget with AutoRouteWrapper {
  const MainPage({super.key});

  @override
  State<MainPage> createState() => _MainPageState();

  @override
  Widget wrappedRoute(BuildContext context) {
    return MultiBlocProvider(
      providers: [
        BlocProvider<DoctorsCubit>(
          create: (context) =>
              DoctorsCubit(context.repository.mainRepository)..getDoctors(),
        ),
        BlocProvider<ServicesCubit>(
          create: (context) =>
              ServicesCubit(context.repository.mainRepository)..getServices(),
        ),
      ],
      child: this,
    );
  }
}

class _MainPageState extends State<MainPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        decoration: BoxDecoration(
          gradient: LinearGradient(
            colors: [
              AppColors.kBlue.withOpacity(0.02),
              AppColors.kWhite.withOpacity(0.5)
            ],
            begin: Alignment.bottomRight,
            end: Alignment.topLeft,
          ),
        ),
        child: CustomScrollView(
          slivers: [
            SliverPadding(
              padding: const EdgeInsets.symmetric(horizontal: 24),
              sliver: SliverList(
                delegate: SliverChildListDelegate(
                  [
                    const SizedBox(
                      height: 34,
                    ),
                    BlocListener<NotificationsCubit, NotificationsState>(
                      listener: (context, state) {
                        state.whenOrNull(
                          loadedState: (notifications, isViewed) {
                            SettingsScope.setisNotificationViewed(
                              context,
                              isViewed,
                            );
                            setState(() {});
                          },
                        );
                      },
                      child: Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          Image.asset(
                            Assets.images.dentalPlaza.path,
                            height: 35,
                            fit: BoxFit.cover,
                          ),
                          ShowCaseSix(
                            child: SizedBox(
                              height: 32,
                              width: 35,
                              child: Stack(
                                children: [
                                  Positioned(
                                    bottom: 0,
                                    left: 0,
                                    child: CustomSquareButton(
                                      iconPath:
                                          Assets.icons.icNotification.path,
                                      iconColor: AppColors.kWhite,
                                      iconPadding: const EdgeInsets.all(5),
                                      size: 30,
                                      backgroundColor: AppColors.kBlue,
                                      onTap: () {
                                        context.router
                                            .push(const NotificationsRoute())
                                            .then((value) {
                                          setState(() {});
                                        });
                                      },
                                    ),
                                  ),
                                  if (context.isNotificationViewed == false)
                                    Positioned(
                                      top: 0,
                                      right: 0,
                                      child: Container(
                                        height: 15,
                                        width: 15,
                                        decoration: BoxDecoration(
                                          borderRadius:
                                              BorderRadius.circular(55),
                                          color: Colors.red,
                                        ),
                                      ),
                                    )
                                ],
                              ),
                            ),
                          ),
                        ],
                      ),
                    ),
                    const SizedBox(
                      height: 34,
                    ),
                    const ShowCaseSeven(
                      child: MainLastRecordWidget(),
                    ),
                    const SizedBox(
                      height: 18,
                    ),
                    const ShowCaseEight(
                      child: NearestMyRecordWidget(),
                    ),
                    const SizedBox(
                      height: 16,
                    ),
                    Padding(
                      padding: const EdgeInsets.symmetric(horizontal: 4),
                      child: Text(
                        context.localized.services,
                        style: AppTextStyles.m16w700,
                      ),
                    ),
                    const SizedBox(
                      height: 9,
                    ),

                    ///
                    ///SERVICES
                    ///
                    ShowCaseNine(
                      child: SizedBox(
                        height: 115,
                        child: BlocConsumer<ServicesCubit, ServicesState>(
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
                              loadedState: (services) {
                                return ListView.builder(
                                  padding:
                                      const EdgeInsets.symmetric(horizontal: 3),
                                  scrollDirection: Axis.horizontal,
                                  itemCount: services.length,
                                  itemBuilder: (context, index) {
                                    return Padding(
                                      padding: const EdgeInsets.only(right: 16),
                                      child: ServiceCardWidget(
                                        service: services[index],
                                      ),
                                    );
                                  },
                                );
                              },
                              orElse: () {
                                return ListView.builder(
                                  padding:
                                      const EdgeInsets.symmetric(horizontal: 3),
                                  scrollDirection: Axis.horizontal,
                                  itemCount: services.length,
                                  itemBuilder: (context, index) {
                                    return const Padding(
                                      padding: EdgeInsets.only(right: 16),
                                      child: LoadShimmer(
                                        height: 115,
                                        width: 103,
                                        radius: 25,
                                      ),
                                    );
                                  },
                                );
                              },
                            );
                          },
                        ),
                      ),
                    ),
                    const SizedBox(
                      height: 16,
                    ),
                    Padding(
                      padding: const EdgeInsets.symmetric(horizontal: 4),
                      child: Text(
                        context.localized.doctors,
                        style: AppTextStyles.m16w700,
                      ),
                    ),
                    const SizedBox(
                      height: 9,
                    ),

                    ///
                    ///DOCTORS
                    ///
                    ShowCaseTen(
                      child: SizedBox(
                        height: 188,
                        child: BlocConsumer<DoctorsCubit, DoctorsState>(
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
                              loadedState: (doctors) {
                                return ListView.builder(
                                  padding:
                                      const EdgeInsets.symmetric(horizontal: 3),
                                  scrollDirection: Axis.horizontal,
                                  itemCount: doctors.length,
                                  itemBuilder: (context, index) {
                                    return Padding(
                                      padding: const EdgeInsets.only(right: 16),
                                      child: DoctorCardWidget(
                                        doctor: doctors[index],
                                      ),
                                    );
                                  },
                                );
                              },
                              orElse: () {
                                return ListView.builder(
                                  padding:
                                      const EdgeInsets.symmetric(horizontal: 3),
                                  scrollDirection: Axis.horizontal,
                                  itemCount: services.length,
                                  itemBuilder: (context, index) {
                                    return const Padding(
                                      padding: EdgeInsets.only(right: 16),
                                      child: LoadShimmer(
                                        height: 188,
                                        width: 124,
                                        radius: 25,
                                      ),
                                    );
                                  },
                                );
                              },
                            );
                          },
                        ),
                      ),
                    ),
                    const SizedBox(
                      height: 16,
                    ),
                  ],
                ),
              ),
            )
          ],
        ),
      ),
    );
  }
}
