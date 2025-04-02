import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  private sidebarVisibleSubject = new BehaviorSubject<boolean>(false);
  private selectedPracticeSubject = new BehaviorSubject<any>(null);

  sidebarVisible$ = this.sidebarVisibleSubject.asObservable();
  selectedPractice$ = this.selectedPracticeSubject.asObservable();

  setSidebarState(visible: boolean, practice?: any): void {
    this.sidebarVisibleSubject.next(visible);
    if (practice) {
      this.selectedPracticeSubject.next(practice);
    }
  }
}
