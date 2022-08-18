  <div className="border-bottom p-1 py-2 fs-2 d-flex gap-2">
          <span className="me-auto">Todo with buttons</span>

          <button className="btn btn-success" onClick={markTodo}>
            <IconCheck />
          </button>
          <button className="btn btn-secondary" onClick={moveUp}>
            <IconArrowUp />
          </button>
          <button className="btn btn-secondary" onClick={moveDown}>
            <IconArrowDown />
          </button>
          <button className="btn btn-danger" onClick={deleteTodo}>
            <IconTrash />
          </button>
        </div>