import { useState } from "react"
import Card from "./Faculty"

export default function AddFaculties() {
    
    return (
        <>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                + Add Faculty
            </button>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Add Faculty</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="input-group flex-nowrap">
                                <input type="text" class="form-control m-2" placeholder="Enter Name" aria-label="Username" aria-describedby="addon-wrapping" id="nameAdd"/>
                            </div>
                            <div class="input-group flex-nowrap">
                                <input type="text" class="form-control m-2" placeholder="Enter Path" aria-label="Username" aria-describedby="addon-wrapping" id="pathAdd"/>
                            </div>
                            <div class="input-group flex-nowrap">
                                <input type="text" class="form-control m-2" placeholder="Enter Experience" aria-label="Username" aria-describedby="addon-wrapping" id="expAdd"/>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}