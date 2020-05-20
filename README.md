To run the app locally:

git clone https://github.com/mohamadkhan19/AcronymsApp
cd AcronymsApp
yarn
yarn pods

open xcode workspace
goto build phases > [CP] Copy Pods Resourses > Output Files
Delete all the Output files

yarn start

To run the test cases
yarn test
yarn jest:coverage