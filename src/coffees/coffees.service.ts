import { Injectable } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'Shipwreck Roast',
      brand: 'Buddy Brew',
      flavors: ['chocolate', 'vanilla'],
    },
  ];

  findAll() {
    return this.coffees;
  }

  findOne(id: string) {
    return this.coffees.find((item) => item.id === +id);
  }

  create(createCoffeeDTO: any) {
    this.coffees.push(createCoffeeDTO);
    return createCoffeeDTO;
  }

  update(id: string, updateCoffeeDTO: any) {
    const existingCoffee = this.coffees.findIndex((item) => item.id === +id);
    if (existingCoffee) {
    }
  }

  remove(id: string) {
    const coffeeIndex = this.coffees.findIndex((item) => item.id === +id);
    if (coffeeIndex > -1) {
      this.coffees.splice(coffeeIndex, 1);
    }
  }
}
