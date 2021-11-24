import React from 'react'
import { useEffect } from 'react';




let b;

export default function Leaderboard() {


  useEffect(() => {
    Promise.resolve(window.responseJson).then(responseJson => {
      if (responseJson.status === "success") {
        let a;
        a = responseJson.data.leaderbord.sort((firstItem, secondItem) => firstItem.time - secondItem.time);


        b = a.sort((firstItem, secondItem) => secondItem.correct - firstItem.correct);

        console.log(b)

        sessionStorage.leader = JSON.stringify(b);



      }
      else {
        console.error("Access not found!");

      }



    })
  }, []);



  return (
    <div >




      <div class="button" data-toggle="modal" data-target="#myModal"><span>OPEN</span></div>



      <div class="modal" id="myModal">
        <div class="modal-dialog">
          <div class="modal-content">


            <div class="modal-header">
              <h4 class="modal-title">SCORE</h4>
              <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>


            <div class="modal-body">

              <table class="container">
                <thead>
                  <tr>
                    <th><h1>Name</h1></th>
                    <th><h1>Time</h1></th>
                    <th><h1>Correct</h1></th>
                    <th><h1>Wrong</h1></th>
                  </tr>
                </thead>
                <tbody>

                  {
                    JSON.parse(sessionStorage.leader).map((a) => (


                      <tr>
                        <td>{a.name}</td>
                        <td>{a.time}</td>
                        <td>{a.correct}</td>
                        <td>{a.wrong}</td>
                      </tr>
                    ))



                  }



                </tbody>
              </table>
            </div>


          </div>
        </div>
      </div>




    </div>
  )
}
