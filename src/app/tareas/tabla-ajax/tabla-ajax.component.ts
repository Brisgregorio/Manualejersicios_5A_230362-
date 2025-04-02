import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { CommonModule } from '@angular/common';
import { DatatablesCustomModule } from '../../datatables.module';

@Component({
  selector: 'app-tabla-ajax',
  standalone: true,
  imports: [CommonModule, DatatablesCustomModule],
  templateUrl: './tabla-ajax.component.html',
  styleUrls: ['./tabla-ajax.component.css']
})
export class TablaAjaxComponent implements OnInit, OnDestroy {
  dtTrigger: Subject<any> = new Subject();
  dtOptions: any = {};

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.dtOptions = {
      ajax: (dataTablesParameters: any, callback: (data: any) => void) => {
        this.http.get<any>('http://localhost:3002/listAllSessions').subscribe(
          (res) => {
            if (res.sessions && Array.isArray(res.sessions)) {
              const formattedData = res.sessions.map((session: any) => ({
                id: session.sessionId,
                email: session.email,
                nickname: session.nickname,
                ip: session.clientData?.ip || 'N/A',
                serverIp: session.serverData?.ip || 'N/A',
                macAddress: session.clientData?.macAddress || 'N/A',
                serverMacAddress: session.serverData?.macAddress || 'N/A',
                status: session.status,
                lastAccessedAt: session.lastAccessedAt,
                createdAt: session.createdAt,
                sessionDuration: session.sessionDuration,
                inactivityTime: session.inactivityTime
              }));

              callback({
                data: formattedData
              });

            } else {
              console.error('Formato incorrecto:', res);
              callback({ data: [] });
            }
          },
          (error) => {
            console.error('Error al conectar con la API:', error);
            callback({ data: [] });
          }
        );
      },
      columns: [
        { title: 'ID Sesión', data: 'id' },
        { title: 'Email Cliente', data: 'email' },
        { title: 'Nickname', data: 'nickname' },
        { title: 'IP Cliente', data: 'ip' },
        { title: 'IP Servidor', data: 'serverIp' },
        { title: 'MAC Cliente', data: 'macAddress' },
        { title: 'MAC Servidor', data: 'serverMacAddress' },
        { title: 'Estado', data: 'status' },
        { title: 'Último Acceso', data: 'lastAccessedAt' },
        { title: 'Fecha Creación', data: 'createdAt' },
        { title: 'Duración', data: 'sessionDuration' },
        { title: 'Inactividad', data: 'inactivityTime' },
      ],
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
      scrollX: true,
      scrollY: '350px',  // Ajuste la altura para que la paginación quede visible
      responsive: true,
      language: {
        url: '//cdn.datatables.net/plug-ins/1.10.25/i18n/Spanish.json',
      },
    };

    this.dtTrigger.next(null);
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
