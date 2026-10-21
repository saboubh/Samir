import { Component } from '@angular/core';

interface ExpertiseArea {
  id: string;
  index: string;
  tone: 'violet' | 'cyan' | 'blue';
  reversed?: boolean;
  eyebrowKey: string;
  titleKey: string;
  summaryKey: string;
  capabilityKeys: string[];
  products: string[];
  image: string;
  imageAltKey: string;
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  public expertiseAreas: ExpertiseArea[] = [
    {
      id: 'rfid-iot',
      index: '01',
      tone: 'violet',
      eyebrowKey: 'experience.expertise.rfid.eyebrow',
      titleKey: 'experience.expertise.rfid.title',
      summaryKey: 'experience.expertise.rfid.summary',
      capabilityKeys: [
        'experience.expertise.rfid.capability1',
        'experience.expertise.rfid.capability2',
        'experience.expertise.rfid.capability3',
        'experience.expertise.rfid.capability4'
      ],
      products: [
        'Tags UHF / RAIN RFID',
        'Tags BLE',
        'Impinj · R720 / R700',
        'Impinj · Speedway R420 / R220',
        'Impinj · xSpan / xArray',
        'Zebra · FX9600 / FX7500',
        'Zebra · FXR90',
        'R600 · autres lecteurs UHF'
      ],
      image: 'assets/images/experience/traceability-rfid.jpg',
      imageAltKey: 'experience.expertise.rfid.imageAlt'
    },
    {
      id: 'mobile-rfid',
      index: '02',
      tone: 'cyan',
      reversed: true,
      eyebrowKey: 'experience.expertise.mobile.eyebrow',
      titleKey: 'experience.expertise.mobile.title',
      summaryKey: 'experience.expertise.mobile.summary',
      capabilityKeys: [
        'experience.expertise.mobile.capability1',
        'experience.expertise.mobile.capability2',
        'experience.expertise.mobile.capability3',
        'experience.expertise.mobile.capability4'
      ],
      products: [
        'Zebra · RFD9030 / RFD9090 / RFD40',
        'Zebra · RFD8500',
        'iOS',
        'Android',
        'Bluetooth',
        'API & SDK'
      ],
      image: 'assets/images/experience/mobile-rfid.jpg',
      imageAltKey: 'experience.expertise.mobile.imageAlt'
    },
    {
      id: 'realtime-location',
      index: '03',
      tone: 'blue',
      eyebrowKey: 'experience.expertise.realtime.eyebrow',
      titleKey: 'experience.expertise.realtime.title',
      summaryKey: 'experience.expertise.realtime.summary',
      capabilityKeys: [
        'experience.expertise.realtime.capability1',
        'experience.expertise.realtime.capability2',
        'experience.expertise.realtime.capability3',
        'experience.expertise.realtime.capability4'
      ],
      products: [
        'Digital Matter · Manta Fusion / Manta GPS',
        'Digital Matter · Dart3 BLE / Oyster3',
        'Digital Matter · Remora3 / Yabby3',
        'Digital Matter · G150',
        'GPS / IoT',
        'Live map',
        'Geofencing',
        'WebSocket'
      ],
      image: 'assets/images/experience/realtime-tracking-map.jpg',
      imageAltKey: 'experience.expertise.realtime.imageAlt'
    }
  ];

  public workExperiences = {
    experience: [
      {
        id: 'comparastore',
        role: 'experience.fullStackDeveloper.role',
        company: 'experience.fullStackDeveloper.company',
        color: '#2563eb',
        companylogo: 'assets/images/compa.jpg',
        date: 'experience.fullStackDeveloper.date',
        desc: [
          'experience.fullStackDeveloper.desc1',
          'experience.fullStackDeveloper.desc2',
          'experience.fullStackDeveloper.desc3',
          'experience.fullStackDeveloper.desc4',
          'experience.fullStackDeveloper.desc5',
          'experience.fullStackDeveloper.desc6'
        ],
        companyUrl: 'https://www.comparastore.com',
        descBullets: [
          {
            url: 'https://www.youtube.com/embed/emunPOTU9hs',
            title: 'experience.fullStackDeveloper.bullet1.title',
            description: 'experience.fullStackDeveloper.bullet1.description'
          },
          {
            url: 'https://www.youtube.com/embed/-2_eGnBrkRI',
            title: 'experience.fullStackDeveloper.bullet2.title',
            description: 'experience.fullStackDeveloper.bullet2.description'
          }
        ]
      },
      {
        id: 'openbook',
        role: 'experience.programmerAnalyst.role',
        company: 'experience.programmerAnalyst.company',
        color: '#f97316',
        companylogo: 'assets/images/ob.jpg',
        date: 'experience.programmerAnalyst.date',
        desc: [
          'experience.programmerAnalyst.desc1',
          'experience.programmerAnalyst.desc2',
          'experience.programmerAnalyst.desc3',
          'experience.programmerAnalyst.desc4',
          'experience.programmerAnalyst.desc5',
          'experience.programmerAnalyst.desc6',
          'experience.programmerAnalyst.desc7'
        ],
        companyUrl: 'https://www.facebook.com/openbook.live/',
        descBullets: [],
        photoList: [
          { title: 'OpenBook', filename: 'assets/images/ob1.png', description: 'Musician Dashboard' },
          { title: 'OpenBook', filename: 'assets/images/ob2.jpg', description: 'Chat' }
        ]
      },
      {
        id: 'smol',
        role: 'experience.softwareEngineer.role',
        company: 'experience.softwareEngineer.company',
        color: '#7c3aed',
        companylogo: 'assets/images/smolCell.png',
        date: 'experience.softwareEngineer.date',
        desc: [
          'experience.softwareEngineer.desc1',
          'experience.softwareEngineer.desc2',
          'experience.softwareEngineer.desc3',
          'experience.softwareEngineer.desc4'
        ],
        companyUrl: 'https://www.polymtl.ca/',
        descBullets: [
          {
            url: 'https://www.youtube.com/embed/rzRli4YbGXU',
            title: 'experience.softwareEngineer.bullet1.title',
            description: 'experience.softwareEngineer.bullet1.description'
          }
        ],
        photoList: [
          { title: 'experience.softwareEngineer.photoList1.title', filename: 'assets/images/smolCell.png', description: 'experience.softwareEngineer.photoList1.description' },
          { title: 'experience.softwareEngineer.photoList2.title', filename: 'assets/images/smol.jpg', description: 'experience.softwareEngineer.photoList2.description' }
        ]
      },
      {
        id: 'scrabble',
        role: 'experience.scrabbleDeveloper.role',
        company: 'experience.scrabbleDeveloper.company',
        color: '#0284c7',
        companylogo: 'assets/images/scrbl.gif',
        date: 'experience.scrabbleDeveloper.date',
        desc: [
          'experience.scrabbleDeveloper.desc1',
          'experience.scrabbleDeveloper.desc2',
          'experience.scrabbleDeveloper.desc3',
          'experience.scrabbleDeveloper.desc4',
          'experience.scrabbleDeveloper.desc5',
          'experience.scrabbleDeveloper.desc6',
          'experience.scrabbleDeveloper.desc7',
          'experience.scrabbleDeveloper.desc8',
          'experience.scrabbleDeveloper.desc9',
          'experience.scrabbleDeveloper.desc10',
          'experience.scrabbleDeveloper.desc11'
        ],
        companyUrl: 'https://www.polymtl.ca/',
        descBullets: [
          {
            url: 'https://www.youtube.com/embed/smp7Iczqpeo',
            title: 'experience.scrabbleDeveloper.bullet1.title',
            description: 'experience.scrabbleDeveloper.bullet1.description'
          },
          {
            url: 'https://www.youtube.com/embed/i8xGl_pzEqY',
            title: 'experience.scrabbleDeveloper.bullet2.title',
            description: 'experience.scrabbleDeveloper.bullet2.description'
          }
        ]
      },
      {
        id: 'second-year-project',
        role: 'experience.secondYearProject.role',
        company: 'experience.secondYearProject.company',
        color: '#ea580c',
        companylogo: 'assets/images/poly.JPG',
        date: 'experience.secondYearProject.date',
        desc: [
          'experience.secondYearProject.desc1',
          'experience.secondYearProject.desc2',
          'experience.secondYearProject.desc3',
          'experience.secondYearProject.desc4',
          'experience.secondYearProject.desc5'
        ],
        companyUrl: 'https://www.polymtl.ca/'
      },
      {
        id: 'first-year-project',
        role: 'experience.firstYearProject.role',
        company: 'experience.firstYearProject.company',
        color: '#b45309',
        companylogo: 'assets/images/poly.JPG',
        date: 'experience.firstYearProject.date',
        desc: [
          'experience.firstYearProject.desc1',
          'experience.firstYearProject.desc2',
          'experience.firstYearProject.desc3'
        ],
        companyUrl: 'https://www.polymtl.ca/'
      }
    ]
  };

  public trackByArea(_: number, area: ExpertiseArea): string {
    return area.id;
  }

  public trackByExperience(_: number, experience: any): string {
    return experience.id;
  }
}
