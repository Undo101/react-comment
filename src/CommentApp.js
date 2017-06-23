import React, {Component} from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'

class CommentApp extends Component {
    constructor () {
        super()
        this.state = {
            comments:[
                {username:'Jerry',content:'Hello!'},
                {username:'Jack',content:'hello'},
                {username:'Lily',content:'hello'}
            ]
        }
    }
    handleSubmitComment(comment){
        console.log(comment)
        this.state.comments.push(comment)
        this.setState({
            comments:this.state.comments
        })
    }
    render() {
        return (
            <div>
                <h2>评论一下</h2>
                <CommentInput onSubmit={this.handleSubmitComment.bind(this)}/>
                <CommentList comments={this.state.comments}/>
            </div>
        )
    }
}
export default CommentApp