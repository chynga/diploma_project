import 'package:auto_route/auto_route.dart';
import 'package:dental_plaza/core/extension/src/build_context.dart';
import 'package:dental_plaza/core/resources/resources.dart';
import 'package:dental_plaza/features/app/bloc/app_bloc.dart';
import 'package:dental_plaza/features/app/router/app_router.dart';
import 'package:dental_plaza/features/app/widgets/build_segment_widget.dart';
import 'package:dental_plaza/features/app/widgets/custom/custom_app_bar.dart';
import 'package:dental_plaza/features/app/widgets/custom/custom_buttons/custom_button.dart';
import 'package:dental_plaza/features/app/widgets/custom/custom_snackbars.dart';
import 'package:dental_plaza/features/app/widgets/custom/custom_switch_button.dart';
import 'package:dental_plaza/features/profile/bloc/health_info_cubit.dart';
import 'package:dental_plaza/features/profile/bloc/profile_cubit.dart';
import 'package:dental_plaza/features/profile/widgets/exit_cupertino_widget.dart';
import 'package:dental_plaza/features/profile/widgets/set_language_profile_widget.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:pull_to_refresh/pull_to_refresh.dart';

class ProfilePage extends StatefulWidget {
  const ProfilePage({super.key});

  @override
  State<ProfilePage> createState() => _ProfilePageState();
}

class _ProfilePageState extends State<ProfilePage> {
  @override
  void initState() {
    super.initState();
    BlocProvider.of<ProfileCubit>(context).getProfie();
    BlocProvider.of<HealthInfoCubit>(context).getHealthInfo();
  }

  RefreshController controller = RefreshController();

  int segmentValue = 0;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: const PreferredSize(
        preferredSize: Size.fromHeight(88),
        child: CustomAppBar(),
      ),
      body: SmartRefresher(
        controller: controller,
        onRefresh: () {
          BlocProvider.of<ProfileCubit>(context).getProfie();
          controller.refreshCompleted();
        },
        child: ListView(
          padding: const EdgeInsets.symmetric(horizontal: 24),
          children: [
            const SizedBox(
              height: 8,
            ),
            const SetLanguageProfileWidget(),
            const SizedBox(
              height: 22,
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                BlocBuilder<ProfileCubit, ProfileState>(
                  builder: (context, state) {
                    return state.maybeWhen(
                      loadedState: (user) {
                        return ClipRRect(
                          borderRadius: BorderRadius.circular(100),
                          child: Image.network(
                            '${user.profileImageUrl}',
                            fit: BoxFit.cover,
                            width: 100,
                            height: 100,
                            loadingBuilder: (
                              context,
                              child,
                              loadingProgress,
                            ) {
                              if (loadingProgress == null) {
                                return child;
                              }
                              return Center(
                                child: CircularProgressIndicator(
                                  color: AppColors.kBlue,
                                  value: loadingProgress.expectedTotalBytes !=
                                          null
                                      ? loadingProgress.cumulativeBytesLoaded /
                                          loadingProgress.expectedTotalBytes!
                                      : null,
                                ),
                              );
                            },
                            errorBuilder: (
                              BuildContext context,
                              Object exception,
                              StackTrace? stackTrace,
                            ) {
                              return const CircleAvatar(
                                maxRadius: 50,
                                backgroundColor: Color(0xff666666),
                                child: Icon(
                                  Icons.person,
                                  color: Colors.white,
                                  size: 80,
                                ),
                              );
                            },
                          ),
                        );
                      },
                      orElse: () {
                        return const CircleAvatar(
                          maxRadius: 50,
                          backgroundColor: Color(0xff666666),
                          child: Icon(
                            Icons.person,
                            color: Colors.white,
                            size: 80,
                          ),
                        );
                      },
                    );
                  },
                ),
              ],
            ),
            const SizedBox(
              height: 33,
            ),
            Row(
              children: [
                Expanded(
                  child: CustomSwitchButton<int>(
                    border: Border.all(color: AppColors.kBlue),
                    groupValue: segmentValue,
                    thumbColor: AppColors.kBlue,
                    backgroundColor: AppColors.kWhite,
                    customSwitchButtonBorderRadius: 50,
                    padding: EdgeInsets.zero,
                    children: {
                      0: BuildSegmentWidget(
                        text: context.localized.personalCard,
                        isSelected: 0 == segmentValue,
                      ),
                      1: BuildSegmentWidget(
                        text: context.localized.information,
                        isSelected: 1 == segmentValue,
                      ),
                    },
                    onValueChanged: (int? value) {
                      setState(() {
                        segmentValue = value!;
                      });
                    },
                  ),
                ),
              ],
            ),
            IndexedStack(
              index: segmentValue,
              children: const [PersonalCardWidget(), InformationWidget()],
            ),
            const SizedBox(
              height: 33,
            ),
            CustomButton(
              body: Text(
                context.localized.exit,
                style: AppTextStyles.m16w400.copyWith(color: AppColors.kWhite),
              ),
              onClick: () {
                showCupertinoModalPopup<void>(
                  context: context,
                  builder: (context) => ExitCupertinoWidget(
                    onYesTap: () {
                      BlocProvider.of<AppBLoC>(this.context)
                          .add(const AppEvent.exiting());

                      Navigator.pop(context);
                    },
                  ),
                );
                // BlocProvider.of<ChatCubit>(context).closeWebSocket();
              },
              style: redButtonStyle(radius: 20),
              height: 35,
            ),
          ],
        ),
      ),
    );
  }
}

class PersonalCardWidget extends StatelessWidget {
  const PersonalCardWidget({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return BlocBuilder<HealthInfoCubit, HealthInfoState>(
      builder: (context, state) {
        return Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const SizedBox(
              height: 26,
            ),
            Text(
              context.localized.allergyToTheMedicine,
              style: AppTextStyles.m16w600,
            ),
            const SizedBox(
              height: 12,
            ),
            Text(
              state.whenOrNull(
                    loadedState: (healthInfo) => healthInfo.allergy,
                  ) ??
                  "",
            ),
            const SizedBox(
              height: 25,
            ),
            Text(
              context.localized.useOfMedication,
              style: AppTextStyles.m16w600,
            ),
            const SizedBox(
              height: 12,
            ),
            Text(
              state.whenOrNull(
                    loadedState: (healthInfo) =>
                        healthInfo.prescribedMedications,
                  ) ??
                  "",
            ),
          ],
        );
      },
    );
  }
}

class InformationWidget extends StatelessWidget {
  const InformationWidget({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return BlocConsumer<ProfileCubit, ProfileState>(
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
          loadedState: (user) {
            return Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                const SizedBox(
                  height: 26,
                ),
                Text(
                  context.localized.fio,
                  style: AppTextStyles.m16w400,
                ),
                const SizedBox(
                  height: 12,
                ),
                Text(
                  '${user.fullName}',
                  style: AppTextStyles.m16w600,
                ),
                const SizedBox(
                  height: 20,
                ),
                const Text(
                  'E-mail',
                  style: AppTextStyles.m16w400,
                ),
                const SizedBox(
                  height: 12,
                ),
                Text(
                  '${user.email}',
                  style: AppTextStyles.m16w600,
                ),
                const SizedBox(
                  height: 20,
                ),
                Text(
                  context.localized.phone,
                  style: AppTextStyles.m16w400,
                ),
                const SizedBox(
                  height: 12,
                ),
                Text(
                  '${user.phone}',
                  style: AppTextStyles.m16w600,
                ),
                const SizedBox(
                  height: 33,
                ),
                CustomButton(
                  body: Text(
                    context.localized.changeTheData,
                    style:
                        AppTextStyles.m16w400.copyWith(color: AppColors.kWhite),
                  ),
                  onClick: () {
                    context.router.push(EditProfileRoute(user: user));
                  },
                  style: mainButtonStyle(radius: 20),
                  height: 35,
                ),
              ],
            );
          },
          orElse: () {
            return const Center(
              child: Padding(
                padding: EdgeInsets.all(25),
                child: CircularProgressIndicator(),
              ),
            );
          },
        );
      },
    );
  }
}
