import 'package:auto_route/auto_route.dart';
import 'package:dental_plaza/core/extension/src/build_context.dart';
import 'package:dental_plaza/core/resources/assets.gen.dart';
import 'package:dental_plaza/core/resources/resources.dart';
import 'package:dental_plaza/features/app/router/app_router.dart';
import 'package:dental_plaza/features/app/widgets/custom/custom_app_bar.dart';
import 'package:dental_plaza/features/app/widgets/gradient_bg.dart';
import 'package:dental_plaza/features/app/widgets/shimmer_box.dart';
import 'package:dental_plaza/features/main/bloc/doctors_cubit.dart';
import 'package:dental_plaza/features/main/model/mock_doctor.dart';
import 'package:dental_plaza/features/record/widgets/doctor_name_widget.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter_svg/flutter_svg.dart';

class RecordPage extends StatefulWidget with AutoRouteWrapper {
  const RecordPage({super.key});

  @override
  State<RecordPage> createState() => _RecordPageState();

  @override
  Widget wrappedRoute(BuildContext context) {
    return BlocProvider<DoctorsCubit>(
      create: (context) =>
          DoctorsCubit(context.repository.mainRepository)..getDoctors(),
      child: this,
    );
  }
}

class _RecordPageState extends State<RecordPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: const PreferredSize(
        preferredSize: Size.fromHeight(88),
        child: CustomAppBar(),
      ),
      body: GradientBg(
        child: CustomScrollView(
          slivers: [
            SliverList(
              delegate: SliverChildListDelegate([
                const SizedBox(
                  height: 39,
                ),
                SvgPicture.asset(
                  Assets.icons.icCalendar.path,
                ),
                // const SizedBox(
                //   height: 24,
                // ),
                Padding(
                  padding: const EdgeInsets.symmetric(horizontal: 33),
                  child: Container(
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(25),
                      boxShadow: [
                        BoxShadow(
                          offset: const Offset(0, 4),
                          color: AppColors.kBlack.withOpacity(0.25),
                          blurRadius: 4,
                        ),
                      ],
                      color: AppColors.kWhite,
                    ),
                    child: Material(
                      borderRadius: BorderRadius.circular(25),
                      child: InkWell(
                        borderRadius: BorderRadius.circular(25),
                        onTap: () {
                          context.router.push(const MyRecordsRoute());
                        },
                        child: Padding(
                          padding: const EdgeInsets.symmetric(vertical: 25),
                          child: Center(
                            child: Text(
                              context.localized.myRecords,
                              style: AppTextStyles.m18w500
                                  .copyWith(color: AppColors.kBlue),
                            ),
                          ),
                        ),
                      ),
                    ),
                  ),
                ),
              ]),
            ),
            BlocBuilder<DoctorsCubit, DoctorsState>(
              builder: (context, state) {
                return state.maybeWhen(
                  loadedState: (doctors) {
                    return SliverPadding(
                      padding: const EdgeInsets.symmetric(
                        horizontal: 65,
                        vertical: 25,
                      ),
                      sliver: SliverList(
                        delegate: SliverChildBuilderDelegate(
                          (context, index) {
                            return Padding(
                              padding: const EdgeInsets.symmetric(vertical: 4),
                              child: DoctorNameWidget(
                                doctor: doctors[index],
                              ),
                            );
                          },
                          childCount: doctors.length,
                        ),
                      ),
                    );
                  },
                  orElse: () {
                    return SliverPadding(
                      padding: const EdgeInsets.symmetric(
                        horizontal: 65,
                        vertical: 25,
                      ),
                      sliver: SliverList(
                        delegate: SliverChildBuilderDelegate(
                          (context, index) {
                            return const Padding(
                              padding: EdgeInsets.symmetric(vertical: 4),
                              child: LoadShimmer(
                                height: 38,
                                radius: 10,
                              ),
                            );
                          },
                          childCount: doctors.length,
                        ),
                      ),
                    );
                  },
                );
              },
            )
          ],
        ),
      ),
    );
  }
}
