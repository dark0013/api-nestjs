import { Injectable } from '@nestjs/common';
import { UpdateTasksDto } from './dto/update-tasks.dto';
import { CreateTasksDto } from './dto/create-tasks.dto';
@Injectable()
export class TasksService {
    private tasksList: any[] = [];
    saludos() {
        return [{ saludo: "Hola desde nest" }];
    }
    getTasks() {
        return this.tasksList;
    }

    getTaskById(id: string) {
        let msj = `Hola desde el servicio de tareas ${id}`;
        return { saludo: msj };
    }


    addTasks(tasks: CreateTasksDto) {
        this.tasksList.push({ title: tasks.title, description: tasks.description });
        return tasks;
    }

    updateTasks(tasks: UpdateTasksDto) {
        return 'update task';
    }

    deleteTasks() {
        return 'delete task';
    }

    patchTasks() {
        return 'patch task';
    }
}
