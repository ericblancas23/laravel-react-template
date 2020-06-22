import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="container">
            <div class="card">
            <div class="card-header">
            Laravel - ReactJS CRUD 
            </div>
            <div class="card-body">
            
            <Link to="/add" class="btn btn-primary">Go somewhere</Link>
            </div>
            <div class="table-responsive">
                <table className="table table-striped mt-4">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Sample Title</td>
                            <td>Sample Description</td>
                            <td>
                                <a href="#" class="btn btn-warning">Edit</a>
                                <a href="#" class="btn btn-danger">Delete</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>
        </div>
    )
}
