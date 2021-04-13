function LoginPage() {
    return (

        <div class="modal fade" id="exampleModal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" style="width: 350px" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title text-left font-weight-bold" id="exampleModalLabel">
                            <span style="color: #007791">V</span>icon welcome <br />back
                    </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="form-group pt-1">
                            <label for="inputEmailSignup">Email</label>
                            <input type="email" class="form-control" id="inputEmailSignup" placeholder="Email" />
                        </div>
                        <div class="form-group">
                            <label for="inputPassSignup">Password</label>
                            <input type="password" class="form-control" id="inputPassSignup" placeholder="Password" />
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-success" id="btnsecond">
                            Sign in
                    </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
