
import * as winston from 'winston'

const format =  winston.format.combine(
    winston.format.timestamp({ format: 'DD-MM-YYYY HH:mm:ss'}),
    winston.format.align(),
    winston.format.printf((form: any) => `${form.level}: ${form.message} ${form.timestamp}`)
)
export function appLogger() {
    return  winston.createLogger({
        transports: [
            new winston.transports.File({
                level: 'error',
                filename: 'applogs/error.log',
                format: format
            })
        ]
    })
}
