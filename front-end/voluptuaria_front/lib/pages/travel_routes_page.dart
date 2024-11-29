import 'package:flutter/material.dart';
import 'package:voluptuaria_front/components/button.dart';
import 'package:voluptuaria_front/components/select_box.dart';
import 'package:voluptuaria_front/resources/themes/colors.dart';
import 'package:voluptuaria_front/components/path_card.dart';
import 'package:voluptuaria_front/components/category_gallery.dart';
import 'package:voluptuaria_front/components/navigation_bar.dart';

class TravelRoutesPage extends StatelessWidget {
  const TravelRoutesPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        toolbarHeight: 80,
        title: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 16.0, vertical: 8.0),
          child: CustomButton(text: 'Generer un parcours', fontSize: 25.0, borderRadius: 20.0, onPressed: () {}),
        ),
      ),
      body: SingleChildScrollView(
        child: Column(
          children: [
            Padding(
              padding: const EdgeInsets.all(16.0),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  const Align(
                    alignment: Alignment.centerLeft,
                    child: SelectBox(placeholder: 'Parcours en cours', items: ['Parcours 1', 'Parcours 2', 'Parcours 3'])
                  ),
                  Image.asset(
                    'lib/resources/images/app-icon.png',
                    width: 100.0,
                    height: 100.0,
                  ),
                ],
              ),
            ),
            Padding(
              padding: const EdgeInsets.all(16.0),
              child: PathCard(
                title: 'Parcours 1', 
                startDate: '2024-01-01', 
                endDate: '2024-01-03', 
                buttonWidget: Align(
                  alignment: Alignment.centerLeft,
                  child: CustomButton(
                    text: 'Détails', 
                    fontSize: 20.0, 
                    borderRadius: 20.0, 
                    width: 150.0, 
                    height: 40.0, 
                    onPressed: () {}
                  ),
                )
              )
            ),
            Padding(
              padding: const EdgeInsets.all(16.0),
              child: PathCard(
                title: 'Parcours 1', 
                startDate: '2024-01-01', 
                endDate: '2024-01-03', 
                buttonWidget: Align(
                  alignment: Alignment.centerLeft,
                  child: CustomButton(
                    text: 'Détails', 
                    fontSize: 20.0, 
                    borderRadius: 20.0, 
                    width: 150.0, 
                    height: 40.0, 
                    onPressed: () {}
                  ),
                )
              )
            ),
            Padding(
              padding: const EdgeInsets.all(16.0),
              child: PathCard(
                title: 'Parcours 1', 
                startDate: '2024-01-01', 
                endDate: '2024-01-03', 
                buttonWidget: Align(
                  alignment: Alignment.centerLeft,
                  child: CustomButton(
                    text: 'Détails', 
                    fontSize: 20.0, 
                    borderRadius: 20.0, 
                    width: 150.0, 
                    height: 40.0, 
                    onPressed: () {}
                  ),
                )
              )
            ),
          ],
        ),
      ),
      bottomNavigationBar: Padding(
        padding: const EdgeInsets.all(16.0),
        child: CustomNavigationBar(
          currentIndex: 0,
          backgroundColor: upperBorderColor,
          borderRadius: 30.0,
          icons: [
            Icons.search,
            Icons.bookmark_border,
            Icons.home_outlined,
            Icons.place_outlined,
            Icons.person_outline,
          ],
          onIconTap: (index) {
            print('Icon $index tapped');
          },
        ),
      ),
    );
  }
}