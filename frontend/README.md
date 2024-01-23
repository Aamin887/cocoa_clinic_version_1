# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


<!-- refer to here -->

import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Spinner from '../../components/Spinner/Spinner';
import LOGO from '../../assets/logo.png'
import Card from '../../components/Card/Card'
import './admindash.css'
import { adminLogout, getAllUser } from '../../features/auth/authReducer'
import { toast } from 'react-toastify';

const dispatch = useDispatch()
  const navigate = useNavigate()
  const { admin, data, isError, isLoading, isSuccess, message } = useSelector(state => state.auth)

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (!admin) {
      navigate('/admin')
    }

    if (admin) {
      dispatch(getAllUser())
    }


  }, [admin, dispatch, navigate, isError, isSuccess, message])


  if (isLoading) {
    return (
      <Spinner />
    )
  }



  <div class="cardBox">
          <Indicator name={'Accounts'} Icon={IoChatboxEllipsesOutline} number={100} />

          <div class="card">
            <div>
              <div class="numbers">10</div>
              <div class="cardName">Account Request</div>
            </div>

            <div class="iconBx">
              <ion-icon name="person-add-outline"></ion-icon>
            </div>
          </div>

          <div class="card">
            <div>
              <div class="numbers">2</div>
              <div class="cardName">Password Request</div>
            </div>

            <div class="iconBx">
              <ion-icon name="lock-closed-outline"></ion-icon>
            </div>
          </div>

          <div class="card">
            <div>
              <div class="numbers">1</div>
              <div class="cardName">Help Request</div>
            </div>

            <div class="iconBx">
              <ion-icon name="chatbox-ellipses-outline"></ion-icon>
            </div>
          </div>
        </div>
        {/* request section  end */}




        <table>
              <thead>
                <tr>
                  <td>Fullname</td>
                  <td>Username</td>
                  <td>Password</td>
                  <td>Status</td>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Dr Issah G Nbehedimah Ahmed</td>
                  <td>A.ISSAH</td>
                  <td>password123</td>
                  <td><span class="status active">Active</span></td>
                </tr>
              </tbody>

              <tbody>
                <tr>
                  <td>Mr Aaron Gordon</td>
                  <td>G.AARON</td>
                  <td>password123</td>
                  <td><span class="status pending">Pending</span></td>
                </tr>
              </tbody>

              <tbody>
                <tr>
                  <td>Mr John Cena</td>
                  <td>C.JOHN</td>
                  <td>password123</td>
                  <td><span class="status rejected">Rejected</span></td>
                </tr>
              </tbody>

              <tbody>
                <tr>
                  <td>Mr John Annan</td>
                  <td>A.JOHN</td>
                  <td>password123</td>
                  <td><span class="status active">Active</span></td>
                </tr>
              </tbody>

              <tbody>
                <tr>
                  <td>Mr Lord Kwesi</td>
                  <td>L.KWESI</td>
                  <td>password123</td>
                  <td><span class="status pending">Pending</span></td>
                </tr>
              </tbody>

              <tbody>
                <tr>
                  <td>Mr Samuel Annam</td>
                  <td>S.ANNAM</td>
                  <td>password123</td>
                  <td><span class="status rejected">Rejected</span></td>
                </tr>
              </tbody>

              <tbody>
                <tr>
                  <td>Mr Yahaya Yakubu</td>
                  <td>Y.YAHAYA</td>
                  <td>password123</td>
                  <td><span class="status active">Active</span></td>
                </tr>
              </tbody>

              <tbody>
                <tr>
                  <td>Mr Nana Kay</td>
                  <td>K.NANA</td>
                  <td>password123</td>
                  <td><span class="status active">Active</span></td>
                </tr>
              </tbody>
            </table>