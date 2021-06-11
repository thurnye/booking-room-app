import React from 'react'
import './reservation.css'




export default function reservation() {
    return (
        <>
        this is the reservation page
            <section className="myreservations">
            <div className="container">
            {/* <!-- Button trigger modal --> */}
<button type="button" class="waves-effect waves-light btn modal-trigger" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

{/* <!-- Modal --> */}
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
      </div>
      <div class="modal-body">
        ...
      </div>
    </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
  </div>
</div>
            </div>
            </section>
        </>
    )
}
