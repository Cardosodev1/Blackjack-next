import { NextRequest, NextResponse } from "next/server"

type LoginRsponse = {
    token?: string
    message?: string
}

interface LoginBody {
    username: string
    password: string
}

export async function POST(request: NextRequest): Promise<NextResponse<LoginRsponse>> {
    try {
        const body: LoginBody = await request.json()
        const { username, password } = body

        if (!username || !password) {
            return NextResponse.json({
                message: "Username and password are required",
            }, { status: 400 })
        }

        if (password === process.env.API_SECRET) {
            return NextResponse.json({
                token: username
            })    
        }

        return NextResponse.json({
            message: 'Username or password invalid'
        }, { status: 401 })
    } catch (error) {
        console.error(error)
        return NextResponse.json({
            message: 'Internal Server Error'
        }, { status: 500 })
    }
}