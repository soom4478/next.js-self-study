import { NextApiRequest, NextApiResponse } from "next";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const date = new Date(); // 현재 시간
    res.json({ time: date.toLocaleDateString() }); // res의 응답값으로 json 객체를 응답하게 설정
}