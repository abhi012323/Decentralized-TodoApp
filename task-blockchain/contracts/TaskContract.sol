// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TaskContract {
    struct Task {
        uint id;
        string title;
        bool completed;
        address createdBy;
    }

    mapping(uint => Task) public tasks;
    uint public taskCount;

    event TaskCreated(uint id, string title, address createdBy);
    event TaskCompleted(uint id, bool completed);
    event Debug(string message);
    event DebugUint(uint value);

    constructor() {
        emit Debug("Constructor called");
        taskCount = 0;
        emit DebugUint(taskCount);
    }

    function createTask(string memory _title) public {
        taskCount++;
        tasks[taskCount] = Task(taskCount, _title, false, msg.sender);
        emit TaskCreated(taskCount, _title, msg.sender);
        emit Debug("Task created");
    }

    function completeTask(uint _id) public {
        Task memory _task = tasks[_id];
        require(_task.id > 0, "Task does not exist");
        require(_task.createdBy == msg.sender, "Only the creator can complete the task");
        _task.completed = true;
        tasks[_id] = _task;
        emit TaskCompleted(_id, true);
        emit Debug("Task completed");
    }

    function getTask(uint _id) public view returns (Task memory) {
        return tasks[_id];
    }
}