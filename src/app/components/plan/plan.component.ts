import { Component, OnInit } from '@angular/core';
import { ACTIVITIES_MOCK } from 'src/app/mocks/activities.mock';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss']
})
export class PlanComponent implements OnInit {
  public linkToBackgroundImage = "https://lh3.googleusercontent.com/gps-cs-s/AB5caB_q3J6pyksVAlQ9SS9NatjrPS4P_MOMsPd16vDRcCR-JHmmFrj41qouAvniReCtLVEnAag5GBtU5OGHG5y5bhjchu_nK5LaTko2ycpcakdkaCN07hX4-SX3y5Z-9iM-9oock8Y=s677-k-no"

  public panels = [
    {
      active: true,
      name: 'Dia 1',
      disabled: false
    },
    {
      active: false,
      disabled: false,
      name: 'Dia 2'
    },
    {
      active: false,
      disabled: false,
      name: 'Dia 3'
    }
  ];

  public hasActivities = false;
  public activities: any;
  
  readonly customStyle = {
    background: 'transparent',
    'border-radius': '4px',
    'margin-bottom': '24px',
    border: '1px solid var(--normal-color)',

  };



  ngOnInit(): void {
    this.activities = Object.values(ACTIVITIES_MOCK.reduce((acc, activity) => {
      const day = activity.dayCounter;
      if (!acc[day]) {
        acc[day] = [];
      }
      acc[day].push(activity);
      return acc;
    }, {} as { [key: number]: typeof ACTIVITIES_MOCK }));

    console.log(this.activities);
    this.hasActivities = this.activities.length > 0;
    console.log(this.hasActivities);
  }


}
