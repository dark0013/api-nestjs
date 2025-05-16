import { Body, Controller, Delete, Get, Param, Patch, Post, Put/*, UsePipes, ValidationPipe */} from "@nestjs/common";
import { TasksService } from "./tasks.service";

import { UpdateTasksDto } from "./dto/update-tasks.dto";
import { CreateTasksDto } from "./dto/create-tasks.dto";
import { ApiTags } from "@nestjs/swagger";
@Controller("/tasks")
@ApiTags("tasks")
export class TasksController {
    tasksService: TasksService;
    constructor(tasksService: TasksService) {
        this.tasksService = tasksService;
    }

    @Get()
    getAllTasks() {
        return this.tasksService.getTasks();
    }
    @Get('/:id')
    getTaskById(@Param('id') id: string) {
        return this.tasksService.getTaskById(id);
    }


    @Post()
    //@UsePipes(new ValidationPipe())
    // @UsePipes(new ValidationPipe({ transform: true }))
    addTasks(@Body() tasks:CreateTasksDto) {
        return this.tasksService.addTasks(tasks);
    }

    @Put()
    updateTasks(@Body() tasks:UpdateTasksDto) {
        return this.tasksService.updateTasks(tasks);
    }

    @Delete()
    deleteTasks() {
        return this.tasksService.deleteTasks();
    }

    @Patch()
    patchTasks() {
        return this.tasksService.patchTasks();
    }

}