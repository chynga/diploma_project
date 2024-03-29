import 'package:auto_route/auto_route.dart';
import 'package:dental_plaza/core/common/constants.dart';
import 'package:dental_plaza/core/extension/src/build_context.dart';
import 'package:dental_plaza/core/resources/assets.gen.dart';
import 'package:dental_plaza/core/resources/resources.dart';
import 'package:dental_plaza/features/app/bloc/app_bloc.dart';
import 'package:dental_plaza/features/app/router/app_router.dart';
import 'package:dental_plaza/features/app/widgets/showcase_for_nav_bar.dart';
import 'package:dental_plaza/features/chat/bloc/chat_cubit.dart';
import 'package:dental_plaza/features/main/bloc/notifications_cubit.dart';
import 'package:dental_plaza/features/main/bloc/view_notifications_cubit.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter_svg/flutter_svg.dart';

// ignore: unused_element
const _tag = 'Base';

class Base extends StatefulWidget {
  const Base({super.key});

  @override
  _BaseState createState() => _BaseState();
}

class _BaseState extends State<Base> with TickerProviderStateMixin {
  TabController? tabController;
  int? previousIndex;

  @override
  void initState() {
    tabController = TabController(length: 5, vsync: this);
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return BlocBuilder<AppBLoC, AppState>(
      builder: (context, appState) {
        return AutoTabsScaffold(
          extendBody: true,
          inheritNavigatorObservers: false,
          routes: [
            MainRoute(),
            ChatRoute(),
            const ToothCleanRoute(),
            const BaseRecordPage(),
            const ProfileRoute(),
          ],
          backgroundColor: AppColors.kWhite,
          builder: (context, child, animation) {
            return SafeArea(child: child);
          },
          bottomNavigationBuilder: (_, tabsRouter) {
            return Builder(
              builder: (newContext) {
                return Container(
                  decoration: BoxDecoration(
                    color: AppColors.kWhite,
                    border: Border(
                      top: BorderSide(
                        color: AppColors.kBlack.withOpacity(0.1),
                      ),
                    ),
                  ),
                  child: Material(
                    color: AppColors.kWhite,
                    child: ShowcaseForNavBar(
                      key1: one,
                      tooltip: Padding(
                        padding: EdgeInsets.only(
                          left: MediaQuery.of(context).size.width * 0.1,
                        ),
                        child: Transform.translate(
                          offset: const Offset(0, 60),
                          child: Row(
                            children: [
                              SvgPicture.asset(
                                Assets.icons.cornerLeftDown.path,
                              ),
                              const SizedBox(
                                width: 4,
                              ),
                              const Text(
                                'Меню бар ',
                                style: AppTextStyles.m16w700White,
                              ),
                            ],
                          ),
                        ),
                      ),
                      child: TabBar(
                        onTap: (value) {
                          if (tabsRouter.activeIndex == value) {
                            tabsRouter.popTop();
                          } else {
                            tabsRouter.setActiveIndex(value);
                            if (value == 1) {
                              BlocProvider.of<ChatCubit>(context)
                                  .connectWebSocket();
                              BlocProvider.of<ChatCubit>(context).readMessage();
                              BlocProvider.of<ViewNotificationsCubit>(
                                context,
                              ).viewNots(type: 'consultation');
                            }
                          }
                          BlocProvider.of<NotificationsCubit>(
                            context,
                          ).getNots();
                          setState(() {});
                        },
                        indicatorColor: Colors.transparent,
                        // indicator: TopIndicator(),
                        splashBorderRadius: BorderRadius.circular(23),
                        padding: const EdgeInsets.symmetric(horizontal: 19),
                        controller: tabController,
                        labelPadding: EdgeInsets.zero,
                        tabs: [
                          CustomTabWidget(
                            icon: Assets.icons.icMain.path,
                            activeIcon: Assets.icons.icMainFilled.path,
                            title: context.localized.main,
                            currentIndex: tabsRouter.activeIndex,
                            tabIndex: 0,
                          ),
                          ShowcaseForNavBar(
                            key1: two,
                            tooltip: Padding(
                              padding: EdgeInsets.only(
                                left: MediaQuery.of(context).size.width * 0.26,
                              ),
                              child: Transform.translate(
                                offset: const Offset(0, 60),
                                child: Row(
                                  children: [
                                    SvgPicture.asset(
                                      Assets.icons.cornerLeftDown.path,
                                    ),
                                    const SizedBox(
                                      width: 4,
                                    ),
                                    Text(
                                      context
                                          .localized.getAnswersToYourQuestions,
                                      style: AppTextStyles.m16w700White,
                                    ),
                                  ],
                                ),
                              ),
                            ),
                            child: BlocBuilder<ChatCubit, ChatState>(
                              buildWhen: (previous, current) =>
                                  previous.maybeWhen(
                                newMessageState: (messages) => false,
                                orElse: () => true,
                              ),
                              builder: (context, state) {
                                return CustomTabWidget(
                                  news: tabController?.index != 1 &&
                                      (state.maybeMap(
                                        newMessageState: (value) => true,
                                        orElse: () => false,
                                      )),
                                  icon: Assets.icons.icChat.path,
                                  activeIcon: Assets.icons.icChatFilled.path,
                                  title: context.localized.chat,
                                  currentIndex: tabsRouter.activeIndex,
                                  tabIndex: 1,
                                );
                              },
                            ),
                          ),
                          ShowcaseForNavBar(
                            key1: three,
                            tooltip: Padding(
                              padding: EdgeInsets.only(
                                left: MediaQuery.of(context).size.width * 0.394,
                              ),
                              child: Transform.translate(
                                offset: const Offset(0, 60),
                                child: Row(
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    SvgPicture.asset(
                                      Assets.icons.cornerLeftDown.path,
                                    ),
                                    const SizedBox(
                                      width: 4,
                                    ),
                                    Expanded(
                                      child: Text(
                                        context.localized.brushYourTeethWithUs,
                                        style: AppTextStyles.m16w700White,
                                      ),
                                    ),
                                  ],
                                ),
                              ),
                            ),
                            child: CustomTabWidget(
                              icon: Assets.icons.icTooth.path,
                              activeIcon: Assets.icons.icToothFilled.path,
                              title: context.localized.cleaning,
                              currentIndex: tabsRouter.activeIndex,
                              tabIndex: 2,
                            ),
                          ),
                          ShowcaseForNavBar(
                            key1: four,
                            tooltip: Padding(
                              padding: EdgeInsets.only(
                                right:
                                    MediaQuery.of(context).size.width * 0.258,
                              ),
                              child: Transform.translate(
                                offset: const Offset(0, 60),
                                child: Row(
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  mainAxisAlignment: MainAxisAlignment.end,
                                  children: [
                                    Text(
                                      context.localized.signUpForAnAppointment,
                                      style: AppTextStyles.m16w700White,
                                    ),
                                    const SizedBox(
                                      width: 4,
                                    ),
                                    SvgPicture.asset(
                                      Assets.icons.cornerRightDown.path,
                                    ),
                                  ],
                                ),
                              ),
                            ),
                            child: CustomTabWidget(
                              icon: Assets.icons.icRecord.path,
                              activeIcon: Assets.icons.icRecordFilled.path,
                              title: context.localized.record,
                              currentIndex: tabsRouter.activeIndex,
                              tabIndex: 3,
                            ),
                          ),
                          ShowcaseForNavBar(
                            key1: five,
                            tooltip: Padding(
                              padding: EdgeInsets.only(
                                right: MediaQuery.of(context).size.width * 0.11,
                              ),
                              child: Transform.translate(
                                offset: const Offset(0, 60),
                                child: Row(
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  mainAxisAlignment: MainAxisAlignment.end,
                                  children: [
                                    Text(
                                      context.localized.personalArea,
                                      style: AppTextStyles.m16w700White,
                                    ),
                                    const SizedBox(
                                      width: 4,
                                    ),
                                    SvgPicture.asset(
                                      Assets.icons.cornerRightDown.path,
                                    ),
                                  ],
                                ),
                              ),
                            ),
                            child: CustomTabWidget(
                              icon: Assets.icons.icProfile.path,
                              activeIcon: Assets.icons.icProfileFilled.path,
                              title: context.localized.profile,
                              currentIndex: tabsRouter.activeIndex,
                              tabIndex: 4,
                            ),
                          ),
                        ],
                      ),
                    ),
                  ),
                );
              },
            );
          },
        );
      },
    );
  }
}

class CustomTabWidget extends StatelessWidget {
  final String icon;
  final String activeIcon;
  final String title;
  final int currentIndex;
  final int tabIndex;
  final bool news;
  const CustomTabWidget({
    super.key,
    required this.icon,
    required this.activeIcon,
    required this.title,
    required this.currentIndex,
    required this.tabIndex,
    this.news = false,
  });

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: 72,
      child: Tab(
        iconMargin: EdgeInsets.zero,
        child: Padding(
          padding: const EdgeInsets.symmetric(vertical: 15),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Transform.translate(
                    offset: news ? const Offset(10, 0) : Offset.zero,
                    child: SvgPicture.asset(
                      tabIndex == currentIndex ? activeIcon : icon,
                    ),
                  ),
                  if (news)
                    Transform.translate(
                      offset: const Offset(0, -5),
                      child: Container(
                        height: 15,
                        width: 15,
                        decoration: BoxDecoration(
                          color: Colors.red,
                          borderRadius: BorderRadius.circular(50),
                        ),
                      ),
                    ),
                ],
              ),
              Text(
                title,
                maxLines: 1,
                style: AppTextStyles.m12w400.copyWith(
                  color: tabIndex == currentIndex
                      ? AppColors.kBlue
                      : AppColors.kBlack.withOpacity(0.3),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
