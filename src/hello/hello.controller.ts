import { Controller, Get, HttpCode, Param, ParseIntPipe, Query, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { ValidateuserPipe } from './pipes/validateuser/validateuser.pipe';
import { AuthGuard } from './auth/auth.guard';

@Controller()
export class HelloController {
    @Get("/")
    index(@Req() request: Request, @Res() response: Response) {
        return response.status(200).json({
            message: "Hola desde el controlador de hello",
            url: request.url
        });
    }

    @Get("/NotFound")
    @HttpCode(404)
    notFoundPage() {
        return "404 Not Found";
    }

    @Get("/error")
    @HttpCode(500)
    errorRutas() {
        return "error";
    }

    @Get("ticket/:num")
    getTicket(@Param('num', ParseIntPipe) id: number) {
        return `Ticket ${id + 14}`;

    }

    @Get("greet")
    @UseGuards(AuthGuard)
    greet(@Query(ValidateuserPipe) query:{name: string, age: number}) {
        return `Hola ${query.name}, tienes ${query.age} años`;

    }

}
