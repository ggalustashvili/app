import { TestBed } from '@angular/core/testing';

import { DeletedTodoService } from './deleted-todo.service';

describe('DeletedTodoService', () => {
  let service: DeletedTodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeletedTodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
