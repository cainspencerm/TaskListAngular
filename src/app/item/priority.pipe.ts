import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
@Pipe({ name: 'priority' })
export class PriorityPipe implements PipeTransform {
    transform(value: number): string {
        let result = "";
        for (let i = 0; i < value; i++) {
            result += "!";
        }
        return result;
    }
}