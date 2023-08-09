import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"

import styles from "./App.module.css"

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
            ea cupiditate officia modi! Ad sed, consequatur perferendis est
            fugiat voluptate sequi doloremque libero nostrum laborum quos esse
            quo totam et.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
            ea cupiditate officia modi! Ad sed, consequatur perferendis est
            fugiat voluptate sequi doloremque libero nostrum laborum quos esse
            quo totam et.
          </p>
        </main>
      </div>
    </div>
  )
}

export default App
