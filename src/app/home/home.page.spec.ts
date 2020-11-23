import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';

// Import so that we can create a 'test spy'...
import { SwapiService } from '../swapi.service';

import { HttpClient } from '@angular/common/http';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  
  // Blah...
  let httpClientSpy: { get: jasmine.Spy };
  let swapiServiceSpy: SwapiService;

  beforeEach(async(() => {
  
    // Create the swapiService spy...
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    swapiServiceSpy = jasmine.createSpyObj('SwapiService', ['get', 'fetchPlanets']);
    //swapiServiceSpy = new SwapiService(httpClientSpy as any);
  
    TestBed.configureTestingModule({
      declarations: [ HomePage ],
      imports: [
        IonicModule.forRoot()
        //, HttpClient
        //, SwapiService
      ],
      // providers: [
      //   SwapiService
      //   , HttpClient
      // ]
    }).compileComponents();

    TestBed.overrideComponent(
      HomePage
      , {
        set: {
          providers: [
            {provide: HttpClient, useValue: httpClientSpy}
            , {provide: SwapiService, useValue: swapiServiceSpy}
          ]
        }
      }
    );

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
