import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api/api.service';
import { DomSanitizer } from '@angular/platform-browser';
import { HelperService } from '../services/user/helper.service';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  items: any[] = [];
  holaDate = '';
  addToggle = false;
  registerForm: any;
  queryForm: any;
  itemsprof = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
  images = [
    {
      imageSrc: 'assets/1.png',
      imageAlt: 'Iqbal',
    },
    {
      imageSrc: 'assets/2.png',
      imageAlt: 'ghalib',
    },
    {
      imageSrc: 'assets/3.png',
      imageAlt: 'jaun',
    },
    // {
    //   imageSrc: 'assets/slide6.jpeg',
    //   imageAlt: 'Danish',
    // },
    // {
    //   imageSrc: 'assets/slide7.jpeg',
    //   imageAlt: 'Danish',
    // },
    // {
    //   imageSrc: 'assets/slide8.jpeg',
    //   imageAlt: 'Danish',
    // },
  ];
  youtubeVideos: any[] = [];
  instasPosts: any = [];
  pbTeams: any[]=[
    {
      name:'',
      isActive:false,
      image:'../../assets/teams/1.jpeg'
    },
    {
      name:'',
      isActive:false,
      image:'../../assets/teams/2.jpeg'
    },
    {
      name:'',
      isActive:false,
      image:'../../assets/teams/3.jpeg'
    },
    {
      name:'',
      isActive:false,
      image:'../../assets/teams/4.jpeg'
    },
    {
      name:'',
      isActive:false,
      image:'../../assets/teams/5.jpeg'
    },
    {
      name:'',
      isActive:false,
      image:'../../assets/teams/6.jpeg'
    },
    {
      name:'',
      isActive:false,
      image:'../../assets/teams/7.jpeg'
    },
    {
      name:'',
      isActive:false,
      image:'../../assets/teams/8.jpeg'
    },
  ];

  constructor(
    public apiService: ApiService,
    private sanitizer: DomSanitizer,
    public helper: HelperService,
    private http: HttpClient,
    public afStore: AngularFirestore,
    private fb: FormBuilder
  ) {
    this.fetchAllData();
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      number: ['', [Validators.required, Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
    this.queryForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }
  allImages = ['',
    '../../assets/teams/2.jpeg',
    '../../assets/teams/3.jpeg',
    '../../assets/teams/4.jpeg',
    '../../assets/teams/5.jpeg',
    '../../assets/teams/6.jpeg',
    '../../assets/teams/7.jpeg',
  ];
  allItems = [
    // { image: '../../assets/teams/1.jpeg', name: 'Dr. Asad Karimi' },
    { image: '../../assets/teams/2.jpeg', name: 'Danish Albela',designation:"Founder / Director" , about:"Website Developer"},
    { image: '../../assets/teams/3.jpeg', name: 'Khalid Parwana' , designation:  "Performer / Poet" , about: "Postgraduate in Urdu" },
    { image: '../../assets/teams/4.jpeg', name: 'Ehsan Dilkash', designation:"Content Creator"  },
    { image: '../../assets/teams/5.jpeg', name: 'Mahboob Chanchal', designation:"Host / Emcee" },
    { image: '../../assets/teams/6.jpeg', name: 'Nadeem Iqbal' , designation: "Social Media Manager (Convener)", about: "Postgraduate in Urdu"},
    { image: '../../assets/teams/7.jpeg', name: 'Danish Daultabadi' , designation: "Videographer / Editor" , about:"Naat-Khwan"  },
    { image: '../../assets/teams/8.jpeg', name: 'Danish Rizwan' , designation: " Event Manager " , about: "Postgraduate in Urdu"},

  ];
  displayedItems: any[] = [];
  currentIndex = 0;

  ngOnInit() {
    this.updateItems();
    setInterval(() => {
      this.updateItems();
    }, 5000);
  }

  updateItems() {
    const nextIndex1 = (this.currentIndex + 1) % this.allItems.length;
    const nextIndex2 = (this.currentIndex + 2) % this.allItems.length;
    const nextIndex3 = (this.currentIndex + 3) % this.allItems.length;

    this.displayedItems = [
      this.allItems[this.currentIndex],
      this.allItems[nextIndex1],
      this.allItems[nextIndex2]
    ];

    this.currentIndex = nextIndex3;
  }
  registerUser() {
    const formData = this.registerForm.value;
    console.log(formData);
    const date = new Date();
    this.holaDate =
      date.getDate().toString() +
      ' ' +
      this.getDateMonth(date.getMonth()) +
      ',' +
      date.getFullYear().toString();
    formData.date = this.holaDate;
    if (this.registerForm.status === 'VALID') {
      this.afStore
        .collection('regForm')
        .add(formData)
        .then((res) => {
          alert('Query sent successfully!');
          this.registerForm.reset();
        });
    }
  }
  

  getDateMonth(month: number) {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    return months[month];
  }
  sendQuery() {
    const formData = this.queryForm.value;
    const date = new Date();
    this.holaDate =
      date.getDate().toString() +
      ' ' +
      this.getDateMonth(date.getMonth()) +
      ',' +
      date.getFullYear().toString();
    formData.date = this.holaDate;
    if (this.queryForm.status === 'VALID') {
      this.afStore
        .collection('queries')
        .add(formData)
        .then((res) => {
          alert('Query sent successfully!');
          this.queryForm.reset();
        });
    }
  }

  fetchAllData() {
    // this.afStore.collection('website').doc('pichhili_Bahar_Instagram').get().subscribe(res=>{console.log(res.data())})
    this.afStore.collection('website').doc('pichhili_Bahar_Facebook').get().subscribe((res:any)=>{this.pbTeams=res.data().response})
    this.afStore.collection('website').doc('pichhili_Bahar_Youtube').get().subscribe((res: any) => {this.youtubeVideos = res.data().response});
  }

  selectVideo(video: any) {
    this.apiService.UStreamer.data = video;
    this.apiService.UStreamer.isStreamerActive = true;
    console.log(this.apiService.UStreamer);
  }
  backgroundImage: string = 'assets/bg.png';
}