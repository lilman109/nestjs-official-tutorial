import { Module } from '@nestjs/common';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';

@Module({
  imports: [],　// explanation: modules can be imported here to use in this module
  controllers: [CoffeesController],// explanation: controllers are registered here to handle incoming requests
  providers: [CoffeesService],// explanation: services are registered here to handle business logic
  exports: [], //  explanation: services can be exported to be used in other modules
})
export class CoffeesModule { }
