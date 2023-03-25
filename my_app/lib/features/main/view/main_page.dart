import 'package:dental_plaza/core/resources/assets.gen.dart';
import 'package:dental_plaza/core/resources/resources.dart';
import 'package:dental_plaza/features/app/widgets/custom/custom_buttons/custom_square_button.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';

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
                        CustomSquareButton(
                          iconPath: Assets.icons.icNotification.path,
                          iconColor: AppColors.kWhite,
                          iconPadding: const EdgeInsets.all(5),
                          backgroundColor: AppColors.kBlue,
                          onTap: () {},
                        ),
                      ],
                    ),
                    const SizedBox(
                      height: 34,
                    ),
                    Container(
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
                                  'Врач: Нысанбаева Айым',
                                  style: AppTextStyles.m16w500
                                      .copyWith(color: AppColors.kWhite),
                                ),
                                const SizedBox(
                                  height: 12,
                                ),
                                Text(
                                  'Ваша запись подтверждена',
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
                    const SizedBox(
                      height: 18,
                    ),
                    Container(
                      decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(20),
                        color: AppColors.kWhite,
                      ),
                      child: Padding(
                        padding: const EdgeInsets.all(12).copyWith(bottom: 20),
                        child: Row(
                          children: [
                            Expanded(
                              child: Column(
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  Text(
                                    'Мои записи ',
                                    style: AppTextStyles.m16w700White
                                        .copyWith(color: AppColors.kBlack),
                                  ),
                                  const SizedBox(
                                    height: 8,
                                  ),
                                  const Text(
                                    'Ближайшее 19 октября',
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
                                  onTap: () {},
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
                    const SizedBox(
                      height: 16,
                    ),
                    const Padding(
                      padding: EdgeInsets.symmetric(horizontal: 4),
                      child: Text(
                        'Услуги',
                        style: AppTextStyles.m16w700,
                      ),
                    ),
                    const SizedBox(
                      height: 9,
                    ),
                    SizedBox(
                      height: 115,
                      child: ListView.builder(
                        padding: const EdgeInsets.symmetric(horizontal: 3),
                        scrollDirection: Axis.horizontal,
                        itemCount: 15,
                        itemBuilder: (context, index) {
                          return Padding(
                            padding: const EdgeInsets.only(right: 16),
                            child: Container(
                              height: 115,
                              width: 103,
                              decoration: BoxDecoration(
                                borderRadius: BorderRadius.circular(25),
                                color: AppColors.kWhite,
                              ),
                              child: Material(
                                borderRadius: BorderRadius.circular(25),
                                color: Colors.transparent,
                                child: InkWell(
                                  borderRadius: BorderRadius.circular(25),
                                  onTap: () {},
                                  child: Column(
                                    children: [
                                      const SizedBox(
                                        height: 24,
                                      ),
                                      SvgPicture.asset(
                                        Assets.icons.icServices.path,
                                      ),
                                      const SizedBox(
                                        height: 12,
                                      ),
                                      const Text(
                                        'Терапия',
                                        style: AppTextStyles.m11w400,
                                      )
                                    ],
                                  ),
                                ),
                              ),
                            ),
                          );
                        },
                      ),
                    ),
                    const SizedBox(
                      height: 16,
                    ),
                    const Padding(
                      padding: EdgeInsets.symmetric(horizontal: 4),
                      child: Text(
                        'Врачи',
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
                        itemCount: 15,
                        itemBuilder: (context, index) {
                          return Padding(
                            padding: const EdgeInsets.only(right: 16),
                            child: Container(
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
                                  onTap: () {},
                                  child: Column(
                                    children: [
                                      const SizedBox(
                                        height: 12,
                                      ),
                                      Image.asset(
                                        Assets.images.mainPicture.path,
                                        height: 124,
                                      ),
                                      const SizedBox(
                                        height: 12,
                                      ),
                                      const Text(
                                        'Гулмарал Шынкызбековна',
                                        style: AppTextStyles.m11w400,
                                        textAlign: TextAlign.center,
                                      )
                                    ],
                                  ),
                                ),
                              ),
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
