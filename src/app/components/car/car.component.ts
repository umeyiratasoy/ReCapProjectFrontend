import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmptyError } from 'rxjs';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { CarDetailDto } from 'src/app/models/carDetailDto';
import { CarImage } from 'src/app/models/carImage';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit{
  currentCar: Car;
  cars: CarDetailDto[] = [];
  carImages: CarImage[] = [];
  brands: Brand[] = [];
  colors: Color[] = [];
  filterText="";
  brandFilter: number = 0;
  colorFilter: number = 0;
  dataLoaded = false;

  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute,
    private brandService:BrandService,
    private colorService:ColorService,
    private carImagesService:CarImageService,
    private toastrService:ToastrService,
    
  ) {}
  
    ngOnInit(): void {
      this.activatedRoute.params.subscribe((params) => {
        if (params['brandId']) {
          this.getCarsByBrandId(params['brandId']);
        }
        else if (params['colorId']) {
          this.getCarsByColorId(params['colorId'])
        }
        else {
          this.getCars()
          this.getBrands()
          this.getColors()
        }
      });
    }
  
  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    })
  }


  getCarsByBrandId(brandId: number) {
    this.carService.getCarsByBrandId(brandId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

  getCarsByColorId(colorId: number) {
    this.carService.getCarsByColorId(colorId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

  setCurrentCar(car: Car) {
    this.currentCar = car;
    console.log(car.colorName);
  }


  getBrands(){
    this.brandService.getBrands().subscribe(response=>{
      this.brands = response.data;
    });
  }
  getColors(){
    this.colorService.getColors().subscribe(response=>{
      this.colors = response.data;
    });
  }

  getCarsByColorAndBrand(brandId:number, colorId:number){
    if(brandId == colorId || brandId != colorId) {
      this.carService.getCarsByColorAndBrand(brandId, colorId).subscribe(response=>{
        this.cars = response.data
        this.dataLoaded = true;
        this.toastrService.success("Başarılı bir şekilde listelendi.") 
      })
    }
    else{
      this.toastrService.error("Listelenemedi.") 
    }
  }

  checkFiltre(colors: Color) {
    this.toastrService.success( colors.colorName + "listelendi") 
  }
  
}
