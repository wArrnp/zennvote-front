import React, { ReactNode } from "react";
import { VotePopularDescription } from "../presentation";

export default function (pageStep:number):ReactNode {
    switch(pageStep) {
        case 0:
            return <VotePopularDescription />
    }
}