import { Component } from '@angular/core';

import { SpargePage } from '../sparge/sparge';
import { AdjustmentPage } from '../adjustment/adjustment';
import { WaterReportPage } from '../water-report/water-report';
import { MashPage } from '../mash/mash';
import { SummaryPage } from '../summary/summary';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = WaterReportPage;
  tab2Root = SpargePage;
  tab3Root = AdjustmentPage;
  tab4Root = MashPage;
  tab5Root = SummaryPage;

  constructor() {

  }
}
