use std::sync::{Arc, RwLock};
use serde::{Serialize, Deserialize};

/// Represents the complete state of the application
/// This struct is serializable to enable persistence and IPC communication
#[derive(Default, Serialize, Deserialize)]
pub struct AppState {
    /// The currently active sprint, if one exists
    current_sprint: Option<Sprint>,
    /// List of all tasks in the system
    tasks: Vec<Task>,
}

/// Manages the application's state with thread-safe access
/// 
/// Uses Arc (Atomic Reference Counting) for shared ownership across threads
/// and RwLock for safe concurrent read/write access to the state
pub struct StateManager {
    /// Thread-safe, shared reference to the application state
    /// - Arc enables multiple owners of the same data
    /// - RwLock ensures safe concurrent access
    state: Arc<RwLock<AppState>>,
}

impl StateManager {
    /// Creates a new instance of the StateManager with default state
    /// 
    /// # Returns
    /// A new StateManager instance with initialized empty state
    /// 
    /// # Example
    /// ```rust
    /// let manager = StateManager::new();
    /// ```
    pub fn new() -> Self {
        Self {
            state: Arc::new(RwLock::new(AppState::default())),
        }
    }

    /// Retrieves a clone of the state reference
    /// 
    /// # Returns
    /// An Arc<RwLock<AppState>> that can be used to read or write the state
    /// 
    /// # Note
    /// - Use .read() on the returned value to get read access
    /// - Use .write() on the returned value to get write access
    /// 
    /// # Example
    /// ```rust
    /// let state = manager.get_state();
    /// let tasks = state.read().unwrap().tasks.clone();
    /// ```
    pub fn get_state(&self) -> Arc<RwLock<AppState>> {
        self.state.clone()
    }
}

// TODO: Implement additional methods for state manipulation:
// - add_task
// - update_task
// - set_current_sprint
// - etc. 