import 'package:auto_route/auto_route.dart';
import 'package:dental_plaza/core/common/constants.dart';
import 'package:dental_plaza/core/extension/src/build_context.dart';
import 'package:dental_plaza/core/resources/assets.gen.dart';
import 'package:dental_plaza/core/resources/resources.dart';
import 'package:dental_plaza/features/app/router/app_router.dart';
import 'package:dental_plaza/features/app/widgets/custom/custom_buttons/custom_square_button.dart';
import 'package:dental_plaza/features/app/widgets/skip_and_next_button_widget.dart';
import 'package:dental_plaza/features/main/model/mock_doctor.dart';
import 'package:dental_plaza/features/main/widgets/doctor_card_widget.dart';
import 'package:dental_plaza/features/main/widgets/service_card_widget.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:showcaseview/showcaseview.dart';

class MainPage extends StatefulWidget {
  const MainPage({super.key});

  @override
  State<MainPage> createState() => _MainPageState();
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
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        Image.asset(
                          Assets.images.dentalPlaza.path,
                          height: 35,
                          fit: BoxFit.cover,
                        ),
                        Showcase.withWidget(
                          disableDefaultTargetGestures: true,
                          overlayColor: Colors.black,
                          overlayOpacity: 0.7,
                          key: six,
                          disableMovingAnimation: true,
                          width: MediaQuery.of(context).size.width,
                          height: 500,
                          targetBorderRadius: BorderRadius.circular(10),
                          onTargetClick: () {
                            ShowCaseWidget.of(context).next();
                          },
                          container: SizedBox(
                            width: MediaQuery.of(context).size.width,
                            child: Column(
                              children: [
                                Row(
                                  children: [
                                    SkipAndNextButtonWidget(
                                      myContext: context,
                                    ),
                                    Expanded(
                                      child: Column(
                                        crossAxisAlignment:
                                            CrossAxisAlignment.end,
                                        children: [
                                          Padding(
                                            padding: EdgeInsets.only(
                                              right: MediaQuery.of(context)
                                                      .size
                                                      .width *
                                                  0.05,
                                            ),
                                            child: SvgPicture.asset(
                                              Assets.icons.arrowUp.path,
                                            ),
                                          ),
                                          Text(
                                            context.localized
                                                .stayTunedForNotifications,
                                            style: AppTextStyles.m16w700White,
                                            textAlign: TextAlign.end,
                                          )
                                        ],
                                      ),
                                    )
                                  ],
                                ),
                              ],
                            ),
                          ),
                          child: CustomSquareButton(
                            iconPath: Assets.icons.icNotification.path,
                            iconColor: AppColors.kWhite,
                            iconPadding: const EdgeInsets.all(5),
                            backgroundColor: AppColors.kBlue,
                            onTap: () {},
                          ),
                        ),
                      ],
                    ),
                    const SizedBox(
                      height: 34,
                    ),
                    Showcase.withWidget(
                      overlayColor: Colors.black,
                      overlayOpacity: 0.7,
                      height: 500,
                      disableMovingAnimation: true,
                      width: MediaQuery.of(context).size.width,
                      targetBorderRadius: BorderRadius.circular(20),
                      onTargetClick: () {
                        ShowCaseWidget.of(context).next();
                      },
                      container: SizedBox(
                        height: MediaQuery.of(context).size.height,
                        width: MediaQuery.of(context).size.width,
                        child: Column(
                          children: [
                            Transform.translate(
                              offset: const Offset(0, -210),
                              child: SkipAndNextButtonWidget(
                                myContext: context,
                              ),
                            ),
                            Transform.translate(
                              offset: const Offset(50, -40),
                              child: Row(
                                children: [
                                  SvgPicture.asset(
                                    Assets.icons.cornerLeftUp.path,
                                  ),
                                  const SizedBox(
                                    width: 8,
                                  ),
                                  Text(
                                    context.localized.dontForgetWhenRecord,
                                    style: AppTextStyles.m16w700White,
                                    textAlign: TextAlign.end,
                                  )
                                ],
                              ),
                            )
                          ],
                        ),
                      ),
                      key: seven,
                      child: Container(
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
                              padding:
                                  const EdgeInsets.symmetric(horizontal: 16),
                              child: Column(
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  const SizedBox(
                                    height: 26,
                                  ),
                                  Text(
                                    '19 Октября',
                                    style: AppTextStyles.m24w500
                                        .copyWith(color: AppColors.kWhite),
                                  ),
                                  const SizedBox(
                                    height: 12,
                                  ),
                                  Text(
                                    '11:00 - 12:00',
                                    style: AppTextStyles.m16w500
                                        .copyWith(color: AppColors.kWhite),
                                  ),
                                  const SizedBox(
                                    height: 12,
                                  ),
                                  Text(
                                    '${context.localized.doctor}: Нысанбаева Айым',
                                    style: AppTextStyles.m16w500
                                        .copyWith(color: AppColors.kWhite),
                                  ),
                                  const SizedBox(
                                    height: 12,
                                  ),
                                  Text(
                                    context.localized.yourEntryHasBeenVerified,
                                    style: AppTextStyles.m16w500
                                        .copyWith(color: AppColors.kWhite),
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
                      ),
                    ),
                    const SizedBox(
                      height: 18,
                    ),
                    Showcase.withWidget(
                      overlayColor: Colors.black,
                      overlayOpacity: 0.7,
                      disableMovingAnimation: true,
                      key: eight,
                      height: MediaQuery.of(context).size.height,
                      width: MediaQuery.of(context).size.width,
                      targetBorderRadius: BorderRadius.circular(20),
                      onTargetClick: () {
                        ShowCaseWidget.of(context).next();
                      },
                      container: SizedBox(
                        height: MediaQuery.of(context).size.height,
                        width: MediaQuery.of(context).size.width,
                        child: Column(
                          children: [
                            Transform.translate(
                              offset: const Offset(0, -120),
                              child: SkipAndNextButtonWidget(
                                myContext: context,
                              ),
                            ),
                            Transform.translate(
                              offset: const Offset(50, -40),
                              child: Row(
                                children: [
                                  SvgPicture.asset(
                                    Assets.icons.cornerLeftUp.path,
                                  ),
                                  const SizedBox(
                                    width: 8,
                                  ),
                                  Text(
                                    context.localized.keepTrackOfYourRecords,
                                    style: AppTextStyles.m16w700White,
                                    textAlign: TextAlign.end,
                                  )
                                ],
                              ),
                            )
                          ],
                        ),
                      ),
                      child: Container(
                        decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(20),
                          color: AppColors.kWhite,
                        ),
                        child: Padding(
                          padding:
                              const EdgeInsets.all(12).copyWith(bottom: 20),
                          child: Row(
                            children: [
                              Expanded(
                                child: Column(
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    Text(
                                      context.localized.myRecords,
                                      style: AppTextStyles.m16w700White
                                          .copyWith(color: AppColors.kBlack),
                                    ),
                                    const SizedBox(
                                      height: 8,
                                    ),
                                    Text(
                                      '${context.localized.nearest} 19 октября',
                                      style: AppTextStyles.m13w400,
                                    )
                                  ],
                                ),
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
                                    onTap: () {
                                      context.router
                                          .push(const MyRecordsMainPage());
                                    },
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
                      ),
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
                    Showcase.withWidget(
                      overlayColor: Colors.black,
                      overlayOpacity: 0.7,
                      disableMovingAnimation: true,
                      key: nine,
                      height: MediaQuery.of(context).size.height,
                      width: MediaQuery.of(context).size.width,
                      targetBorderRadius: BorderRadius.circular(25),
                      onTargetClick: () {
                        ShowCaseWidget.of(context).next();
                      },
                      container: SizedBox(
                        height: MediaQuery.of(context).size.height,
                        width: MediaQuery.of(context).size.width,
                        child: Transform.translate(
                          offset: const Offset(0, -160),
                          child: Column(
                            children: [
                              Transform.translate(
                                offset: const Offset(0, -270),
                                child: SkipAndNextButtonWidget(
                                  myContext: context,
                                ),
                              ),
                              Transform.translate(
                                offset: const Offset(50, -50),
                                child: Row(
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    SvgPicture.asset(
                                      Assets.icons.cornerLeftDown.path,
                                    ),
                                    const SizedBox(
                                      width: 8,
                                    ),
                                     Text(
                                      context.localized.seeWhatServicesAreAvailable,
                                      style: AppTextStyles.m16w700White,
                                      textAlign: TextAlign.end,
                                    )
                                  ],
                                ),
                              )
                            ],
                          ),
                        ),
                      ),
                      child: SizedBox(
                        height: 115,
                        child: ListView.builder(
                          padding: const EdgeInsets.symmetric(horizontal: 3),
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
                    SizedBox(
                      height: 188,
                      child: ListView.builder(
                        padding: const EdgeInsets.symmetric(horizontal: 3),
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
