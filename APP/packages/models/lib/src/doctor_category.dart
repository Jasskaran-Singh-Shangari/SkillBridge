import 'package:flutter/material.dart';

enum DoctorCategory {
  anesthesiology(
    name: 'Robotics',
    icon: Icons.account_circle_outlined,
  ),
  cardiology(
    name: 'Big Data',
    icon: Icons.favorite_border_outlined,
  ),
  dentist(
    name: 'Block Chain',
    icon: Icons.person_2_outlined,
  ),
  dermatology(
    name: 'Java Dev',
    icon: Icons.health_and_safety_outlined,
  ),
  emergencyMedicine(
    name: 'Cloud Computing',
    icon: Icons.local_pharmacy_outlined,
  ),
  familyMedicine(
    name: 'Machine Learning',
    icon: Icons.medical_information_outlined,
  ),
  gastroenterology(
    name: 'Gastroenterology',
    icon: Icons.medical_services_outlined,
  ),
  generalSurgery(
    name: 'Artificial intelligence',
    icon: Icons.health_and_safety_outlined,
  ),
  internalMedicine(
    name: 'Internal Medicine',
    icon: Icons.emergency_outlined,
  ),
  neurology(
    name: 'Neurology',
    icon: Icons.psychology_outlined,
  ),
  orthopedicSurgery(
    name: 'Orthopedic Surgery',
    icon: Icons.medication_liquid_sharp,
  ),
  pediatrics(
    name: 'Pediatrics',
    icon: Icons.medical_services_outlined,
  ),
  psychiatry(
    name: 'Psychiatry',
    icon: Icons.psychology_outlined,
  ),
  pulmonology(
    name: 'Pulmonology',
    icon: Icons.medical_services_outlined,
  );

  final String name;
  final IconData icon;

  const DoctorCategory({
    required this.name,
    required this.icon,
  });
}
