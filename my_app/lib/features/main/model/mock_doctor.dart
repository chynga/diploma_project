import 'package:dental_plaza/core/resources/assets.gen.dart';

class MockDoctor {
  final int id;
  final String? name;
  final String? image;

  MockDoctor({required this.id, this.name, this.image});
}

List<String> services = [
  'Ортопедия',
  'Терапия',
  'Хирургия',
  'Имплантация зубов',
  'Брекет системы',
  'Лечение молочных зубов',
  'Эстетическая стоматология',
  'Ортодонтия',
];

List<MockDoctor> doctors = [
  MockDoctor(
    id: 0,
    image: Assets.images.doctor0.path,
    name: 'Гулмарал Шынкызбековна',
  ),
  MockDoctor(
    id: 1,
    image: Assets.images.doctor1.path,
    name: 'Адилет Акылбекович',
  ),
  MockDoctor(
    id: 2,
    image: Assets.images.doctor2.path,
    name: 'Асхат Акылбекович',
  ),
  MockDoctor(
    id: 3,
    image: Assets.images.doctor3.path,
    name: 'Гаухар Мендыбаевна',
  ),
  MockDoctor(
    id: 4,
    image: Assets.images.doctor4.path,
    name: 'Косылбаев Серик',
  ),
  MockDoctor(
    id: 5,
    image: Assets.images.doctor5.path,
    name: 'Нурдилаев Гарифулла',
  ),
  MockDoctor(
    id: 6,
    image: Assets.images.doctor6.path,
    name: 'Ихсанова Дана',
  ),
  MockDoctor(
    id: 7,
    image: Assets.images.doctor7.path,
    name: 'Хасен Диана',
  ),
  MockDoctor(
    id: 8,
    image: Assets.images.doctor8.path,
    name: 'Бекенов Ануар',
  ),
];
