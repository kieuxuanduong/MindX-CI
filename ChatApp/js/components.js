const components = {}

components.welcomeScreen = `
    <div> Welcome to chat app </div>
`
components.registerScreen = `
<div class="register-container">
            <div class="register-form">
                <div class="title">Mindx Chat</div>
                <form id="form-register">
                    <div class="name-wrapper">
                        <div class="input-wrapper">
                            <input type="text" name="firstName" placeholder="First Name...">
                            <div class="error" id="error-first-name"></div>
                        </div>
                        <div class="input-wrapper">
                            <input type="text" name="lastName" placeholder="Last Name...">
                            <div class="error" id="error-last-name"></div>
                        </div>
                    </div>
                    <div class="input-wrapper">
                        <input type="email" name="email" placeholder="Email...">
                        <div class="error" id="error-email"></div>
                    </div>
                    <div class="input-wrapper">
                        <input type="password" name="password" placeholder="Password...">
                        <div class="error" id="error-password"></div>
                    </div>
                    <div class="input-wrapper">
                        <input type="password" name="confirmPassword" placeholder="Confirm Password...">
                        <div class="error" id="error-confirm-password"></div>
                    </div>
                    <div class="submit-wrapper">
                        <div>Already have an account? <span class="cursor-pointer" id="redirect-to-login">Login</span></div>
                        <button class="btn" type="submit">Register</button>
                    </div>
                </form>
            </div>
        </div>
`
components.loginScreen = `
<div class="login-container">
            <div class="login-form">
                <div class="title">Mindx Chat</div>
                <form id="form-login">
                    
                    <div class="input-wrapper">
                        <input type="email" name="email" placeholder="Email...">
                        <div class="error" id="error-email"></div>
                    </div>
                    <div class="input-wrapper">
                        <input type="password" name="password" placeholder="Password...">
                        <div class="error" id="error-password"></div>
                    </div>
                    
                    <div class="submit-wrapper">
                        <div>Don't have an account? <span class="cursor-pointer" id="redirect-to-register">Register</span></div>
                        <button class="btn" type="submit">Login</button>
                    </div>
                </form>
            </div>
        </div>
`

components.chatScreen = `
        <div class="chat-header">
                MindX chat
        </div>    
        <div class="chat-container">
            <div class="aside-right">
                <div class="list-conversations">
                    
                    
                </div>
            </div>
            <div class="main">
                <div class="conversation-detail">
                    <div class="conversation-title">First conversation</div>
                    <div class="list-message">

                    </div>
                    <form id="sendMessageForm">
                        <input type="text" class="input" name="message" placeholder="Type a message">
                        <button class="btn"><i class="fa fa-paper-plane" aria-hidden="true"></i></button>
                    </form>
                </div>
            </div>
        </div>
`