import { EventEmitter } from "@angular/core";

export class NotificationService {

    notifier: EventEmitter<any> = new EventEmitter<string>()

    notify(message: string): void{
        this.notifier.emit(message)
    }
}